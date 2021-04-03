import React from 'react'
import { useFetchCovidData } from '../../hooks/useFetchCovidData'
import { Dashboard } from './Dashboard.component'

export function DashboardContainer() {

  const {data} = useFetchCovidData()

  return(
    <>
    <Dashboard />
    </>
  )

}