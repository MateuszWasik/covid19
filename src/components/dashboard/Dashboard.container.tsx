import React from 'react'
import { useFetchCovidData } from '../../hooks/useFetchCovidData'
import { Dashboard } from './Dashboard.component'

export function DashboardContainer() {

  const {data, error} = useFetchCovidData()

  return (
    <>
      {
        data && <Dashboard countries={data.countries}/>
      }
      {
        error.isError && <h1>Error</h1>
      }
    </>
  )

}