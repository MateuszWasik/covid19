import React, { useEffect, useState } from "react"
import ReactTooltip from 'react-tooltip'
import { MapChart } from '../map-chart/MapChart.component'
import { TooltipContent } from '../tooltip-content/TooltipContent.component'

export interface CovidData {
  Country: string
  Slug: string
  CountryCode: string
  NewConfirmed: number
  TotalConfirmed: number
  NewDeaths: number
  TotalDeaths: number
  NewRecovered: number
  TotalRecovered: number
  Date: Date
}

export interface DataResponse {
  id: string
  global: object
  countries: CovidData[]
  date: string
}

export function Dashboard({countries}: Partial<DataResponse>) {
  const [countryName, setCountryName] = useState('')
  const [tooltipElement, setTooltipElement] = useState({})
  const [countriesList, setCountriesList] = useState<CovidData[] | undefined>([])

  useEffect(() => {
    setCountriesList(countries)
  },[countries])

  useEffect(() => {
    const countryFound = countriesList?.find(country => country.Country === countryName)
    if (countryFound) setTooltipElement(countryFound)
    //eslint-disable-next-line react-hooks/exhaustive-deps
    },[countryName])

  return (
    <>
      <MapChart setTooltipContent={setCountryName}/>
      <ReactTooltip>{
        <TooltipContent tooltipElement={tooltipElement}/>
      }</ReactTooltip>
    </>
  )
}