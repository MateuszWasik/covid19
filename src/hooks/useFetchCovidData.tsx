import { useEffect, useState } from 'react'
import { DataResponse } from '../components/dashboard/Dashboard.component'


export const useFetchCovidData = () => {
  const [data, setData] = useState<DataResponse>({countries: [], global: {}, date: '', id: ''})
  const [error, setError] = useState({errorMessage: {}, isError: false})

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch('https://api.covid19api.com/summary')
          .then((result) => result.json())
          .then((result) => {
            setData({
              countries: result.Countries,
              global: result.Global,
              date: result.Global.Date,
              id: result.Id
            })
          })
      } catch (error) {
        setError({errorMessage: error, isError: true})
      }
    }
    fetchData()
  }, [])

  return {data, error}
}