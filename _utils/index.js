import db from '@/_database/zoo-flight-search.json';

// api methods
const getAllFlights = () => {
   return db?.result.map(flight => ({id: flight.id, legs: flight.legs, priceInfo: flight.totalPrice}))
}

const getFlightById = (flightId) => {

   const flight = db?.result.find(flight => flight.id === parseInt(flightId))

   if(!flight) return 'No flight found!'

   return flight;
}

const getAllFlightSegments =() => {
   return db?.result.map(flight => ({id: flight.id, searchDetails: flight.legs[0].segment}))
}


// js helper
const getHourMins = (time) => {
   return `${new Date(time).getHours()}.${new Date(time).getMinutes()}`;
}



export { getAllFlights, getFlightById, getAllFlightSegments, getHourMins};