"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import SearchDate from "./SearchDate"
import SearchInput from "./SearchInput"

const Search = ({
  fromHome,
  getSearchDetails,
  departureLocation,
  arrivalLocation,
  departureDate,
}) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [searchTerm, setSearchTerm] = useState({
    departureLocation: departureLocation || "DAC",
    arrivalLocation: arrivalLocation || '',
    departureDate: departureDate || '',
  })

  const [allowSearch, setAllowSearch] = useState(true)

  const handleInputs = (e, targetName, targetValue) => {
    console.log(targetName, targetValue);
    // if we can get data from list click event
    let state;
    if(e=== undefined) {
      state = { ...searchTerm, [targetName]: targetValue }
    } else {
      const name = e.target.name
      const value = e.target.value
  
      state = { ...searchTerm, [name]: value }
    }
    console.log(state)

    if (
      new Date(state.departureDate).getTime() > new Date().getTime() &&
      state.departureLocation.trim().length > 0 &&
      state.arrivalLocation.trim().length > 0
    ) {
      setAllowSearch(true)
    } else {
      setAllowSearch(false)
    }
    setSearchTerm(state)

  }

  function doSearch() {
    const params = new URLSearchParams(searchParams)

    params.set("departureLocation", searchTerm?.departureLocation)
    params.set("arrivalLocation", searchTerm?.arrivalLocation)

    params.set("departureDate", searchTerm?.departureDate)

    if (pathname.includes("flight-search")) {
      replace(`${pathname}?${params.toString()}`)
    } else {
      replace(`${pathname}flight-search?${params.toString()}`)
    }
  }

  return (
    <>
      <div className="lg:max-h-[250px] mt-6 mb-1">
        <div id="searchParams" className="flex justify-center">
          <SearchInput
            getSearchDetails={getSearchDetails}
            inputType="departureLocation"
            searchTerm={searchTerm.departureLocation}
            handleInputs={handleInputs}
          />
          <SearchInput
            getSearchDetails={getSearchDetails}
            inputType="arrivalLocation"
            searchTerm={searchTerm.arrivalLocation}
            handleInputs={handleInputs}
          />

          <SearchDate
            inputType="departureDate"
            searchTerm={searchTerm.departureDate}
            handleInputs={handleInputs}
          />

          <div className="w-full">
            <button
              disabled={!allowSearch}
              className="search-btn !translate-y-3 mt-1"
              onClick={doSearch}
            >
              🔍️ {fromHome === true ? "Modified Search" : "Search"}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
