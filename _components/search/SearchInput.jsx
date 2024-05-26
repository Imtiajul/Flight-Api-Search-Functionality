import { useDebounce } from "@/_hooks/useDebounce";
import Image from "next/image";
import { useState } from "react";
import InputSearchResults from "./InputSearchResults";

const SearchInput = ({getSearchDetails, inputType, handleInputs, searchTerm }) => {
  const [closeSearchResults, setCloseSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // it will take list city name or simply change handleInputs
  // target name & value are optional data
  const handleListChange = (e, targetName, targetValue) => {
    if(targetName && targetValue) {
      handleInputs(e, targetName, targetValue);
    } else {
      handleInputs(e);
      doSearch(e.target.value);
      setCloseSearchResults(true);
    }
  }

  const doSearch = useDebounce( (searchTerm) => {
    if(inputType === 'departureLocation') {
      const found = getSearchDetails?.filter((route) => {
          return route?.searchDetails?.departureLocation?.toLowerCase().includes(searchTerm.toLowerCase());
          // console.log('departureLocation', route.searchDetails.departureLocation);
        })
        setSearchResults(found);
        
      } else if (inputType === 'arrivalLocation') {
        const found = getSearchDetails?.filter((route) => {

          // console.log('arrivalTerm', searchTerm);

          // console.log('arrivalLocation', route.searchDetails.departureLocation);
          return route?.searchDetails?.arrivalLocation?.toLowerCase().includes(searchTerm.toLowerCase());
        })
        // console.log('arival', found);
        setSearchResults(found);
    }
  }, 500);

  return (
    <div className="relative">
      <div>
        <span>Flying {inputType === "departureLocation" ? "from" : "to"}</span>
        <button
          type="button"
          className="mt-2 border-2 px-2 py-5 h-8 w-full items-center rounded-lg flex focus:[::not(:focus-visible)]:outline-none"
        >
          <Image
            src="/plane-icon.png"
            alt="plane"
            className="h-5 w-5 mr-2"
            width={50}
            height={50}
          />
          <input
            id={inputType}
            name={inputType}
            type="text"
            value={searchTerm}
            placeholder="City or Airport"
            onChange={(e) => {
              handleListChange(e)
            }}
            className="flex-1 focus:border-none focus:outline-none"
          />
        </button>
      </div>
      {searchTerm && searchTerm.trim().length > 0 && closeSearchResults && (
          <InputSearchResults inputType={inputType} searchResults={searchResults}
           setCloseSearchResults={setCloseSearchResults} 
           changeInputCity={handleListChange}
           />
      )}
 
    </div>
  )
}

export default SearchInput
