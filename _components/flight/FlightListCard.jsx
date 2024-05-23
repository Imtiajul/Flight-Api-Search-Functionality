import FlightCard from "./FlightCard"

const FlightListCard = ({ filteredFlights }) => {
  return (
    <>
      {filteredFlights &&
        filteredFlights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
    </>
  )
}

export default FlightListCard
