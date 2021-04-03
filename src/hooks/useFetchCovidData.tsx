import { useEffect, useState } from 'react'


export const useFetchCovidData = () => {

  const [data, setData] = useState(null)


  useEffect(() => {

    fetch('https://api.covid19api.com/summary')
      .then((result) => result.json())
      .then((result) => {
        setData(result)
      })
  },[])


  return {data}
}