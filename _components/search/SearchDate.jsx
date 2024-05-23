const SearchDate = ({inputType, handleInputs, searchTerm}) => {
  return (
    <div>
      <span>Departing</span>
      <div className="mt-2">
        <input
          type="date"
          name={inputType}
          id={inputType}
          value={searchTerm}
          onChange={handleInputs}
        />
      </div>
    </div>
  )
}

export default SearchDate
