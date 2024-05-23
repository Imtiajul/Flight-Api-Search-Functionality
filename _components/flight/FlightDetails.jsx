"use client"

import { useState } from "react"
import FlightRoute from "./FlightRoute"
import { getHourMins, getSingleHours, getSingleMinutes } from "@/_utils"

const FlightDetails = ({segmentDetails}) => {
  const [showToggle, setShowToggle] = useState(false)

  return (
    <>
      <div className="flex flex-col items-end">
        <div className="mr-7">
          <button onClick={()=> setShowToggle(prevState => !prevState)} type="button">Flight Details
          {showToggle ? <>&#11205;</>: <>&#11206;</>} </button>
        </div>
      </div>

      {showToggle && (
        <>
          <div className="flex flex-col">
            <div className="bg-blue-950 p-2 w-2/12 flex justify-center gap-6 text-white text-sm">
              <span>DAC</span>
              <span>✈️</span>
              <span>LOC</span>
            </div>
          </div>
          <hr className="-mt-2" />

          {segmentDetails?.map(route => {
            return <FlightRoute 
            departureLoc={route.origin.airport}
            departTime={getHourMins(route.origin.dateTime)}
            arrivalLoc={route.destination.airport}
            arrivalTime={getHourMins(route.destination.dateTime)}
            />

}
          )}
        </>
      )}
    </>
  )
}

export default FlightDetails
