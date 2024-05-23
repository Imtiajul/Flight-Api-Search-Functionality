import { getHourMins } from "@/_utils"
import FlightDetails from "./FlightDetails"
import FlightRoute from "./FlightRoute"

const FlightCard = ({ flight }) => {
  const segmentLength = flight?.legs[0].segmentDetails.length - 1

  const departureTime = getHourMins(flight?.legs[0].segmentDetails[0].origin.dateTime);

  const arivalTime = getHourMins(flight?.legs[0].segmentDetails[segmentLength].destination.dateTime);

  return (
    <div className="flex flex-col gap-4 border border-gray/20 p-4 rounded-md bg-white">
      {/* card header */}
      <div>
        {/* <p>Saturday, June</p> */}
        <p>{flight?.legs[0].segment.departureDate}</p>
      </div>
      {/* card body */}

      <FlightRoute
        departureLoc={flight?.legs[0].segment.departureLocation}
        departTime={departureTime}
        arrivalLoc={flight?.legs[0].segment.arrivalLocation}
        arrivalTime={arivalTime}
        flightPrice={flight?.priceInfo?.totalPrice}
      />

      {/* card footer */}

      <FlightDetails segmentDetails={flight.legs[0].segmentDetails} />
    </div>
  )
}

export default FlightCard
