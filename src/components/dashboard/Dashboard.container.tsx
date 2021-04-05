import React, { useEffect, useState } from 'react'
import { useFetchCovidData } from '../../hooks/useFetchCovidData'
import { Dashboard } from './Dashboard.component'
import { ShowCurrentDate } from '../date/Date.component'

export function DashboardContainer() {
  const {data, error} = useFetchCovidData()

  const [convertedDate, setConverterDate] = useState('')


  useEffect(() => {
    const prepareDate = () => {
      setConverterDate(new Date(data.date).toDateString())
    }
    prepareDate()
  }, [data])

  return (
    <>
      {
        data && 
        <>
          <ShowCurrentDate date={convertedDate} />
          <Dashboard countries={data.countries}/>
          </>
      }
      {
        error.isError && <h1>Error</h1>
      }
    </>
  )

}