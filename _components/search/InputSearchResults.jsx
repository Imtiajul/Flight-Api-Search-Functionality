const InputSearchResults = ({
  searchResults,
  inputType,
  setCloseSearchResults,
  changeInputCity,
}) => {
  return (
    <div className="absolute left-4 top-15 z-[999] w-full rounded-md bg-white p-2 shadow">
      <ul
        role="list"
        className="divide-y divide-gray-100 [:>*]:py-2 overflow-hidden"
      >
        {searchResults.map((item, index) => {
          const city =
            inputType === "arrivalLocation"
              ? item.searchDetails.arrivalLocation
              : item.searchDetails.departureLocation

          if (index > 10) return null
          return (
            <li
              onClick={() => {
                setCloseSearchResults(false)
                changeInputCity(undefined, inputType, city)
              }}
              key={item.id}
              className="hover:bg-slate-300 px-2 py-1 space-y-1 rounded-md transition-all hover:text-emerald-600 text-sm cursor-pointer"
            >
              {city}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default InputSearchResults
