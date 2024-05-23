const FlightRoute = ({ routeDetails, flightPrice, departureLoc, arrivalLoc, departTime, arrivalTime }) => {



  return (
    <div
      className={`flex justify-center ${routeDetails ? "border-b py-4": ""}`}
    >
      <div className="w-2/12 flex flex-col items-center justify-center">
        <span className="text-lg bold">{departTime}</span>
        <span>{departureLoc}</span>
      </div>
      <div className="w-5/12 grid grid-cols-4 gap-2 justify-center items-center ">
        {["Economy", "Refundable", "7h 23m"].map((item) => (
          <span key={item} className="border px-2 py-1 text-sm text-center">
            {item}
          </span>
        ))}
      </div>
      <div className="w-2/12 flex flex-col items-center justify-center">
        <span className="text-lg bold">{arrivalTime}</span>
        <span>{arrivalLoc}</span>
      </div>

      {flightPrice && (
        <div className="flex flex-col">
          <p className="text-lg mb-2">BDT {flightPrice}</p>
          <button type="button" className="search-btn !translate-y-0">
            Book Now
          </button>
        </div>
      )}
    </div>
  )
}

export default FlightRoute
