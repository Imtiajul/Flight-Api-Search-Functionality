import FlightListCard from "@/_components/flight/FlightListCard"
import Search from "@/_components/search/Search"
import { Suspense } from "react"

const FlightSearchPage = async ({
  searchParams: { departureLocation, arrivalLocation, departureDate },
}) => {
    // search details
  // const response = await fetch(`${process.env.BASE_URL}/api/flight-segments`)
  // const searchDetails = await response.json()

  //   // flight details
  // const res = await fetch(`${process.env.BASE_URL}/api/flight`)
  // const flightData = await res.json()

//   console.log(flightData);

  // const filteredFlights = flightData.filter((flight) => {
  //   return (
  //     flight.legs[0].segment.departureLocation.toLowerCase() ===
  //     departureLocation.toLowerCase() &&
  //     flight.legs[0].segment.arrivalLocation.toLowerCase() ===
  //       arrivalLocation.toLowerCase() &&
  //     new Date(flight.legs[0].segment.departureDate).getTime() ===
  //       new Date(departureDate).getTime()
  //   )
  // })

//   console.log('filterd results', filteredFlights);

  return (
    <section className="bg-[#F6F3E9] h-screen max-h-screen relative grid place-items-center bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="container items-center pb-12 ">
        <div className="col-span-7">
          <h1 className="font-bold text-3xl lg:text-5xl my-4 text-center lg:w-8/12 mx-auto">
            Book Your Flight with Ease
          </h1>
          <p className="my-2 text-[#5f5e5e] text-center">
            We will provide you the best rate around the world!
          </p>
          {/* <Suspense>
          <Search
            getSearchDetails={searchDetails}
            departureLocation={departureLocation}
            arrivalLocation={arrivalLocation}
            departureDate={departureDate}
          />
          </Suspense>

          {filteredFlights.length > 0 ? (
              <FlightListCard filteredFlights={filteredFlights}/>
          ) : (
            <div className="flex justify-center">
                <p className="text-lg font-bold text-center mt-4 bg-slate-100 w-1/2 p-4 rounded-md shadow-md">No Search Data Found!!</p>

            </div>
          )
        } */}

        </div>
      </div>
    </section>
  )
}

export default FlightSearchPage
