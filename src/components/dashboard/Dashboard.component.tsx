import React, { useState } from "react"
import ReactTooltip from 'react-tooltip'
import { MapChart } from '../map-chart/MapChart.component'
import { TooltipContent } from '../tooltip-content/TooltipContent.component'

export function Dashboard() {
  const [countryName, setCountryName] = useState('')

  return (
    <>
      <MapChart setTooltipContent={setCountryName}/>
      <ReactTooltip>{
        <TooltipContent countryName={countryName}/>
      }</ReactTooltip>
    </>
  )
}