import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import React from 'react'

type Props = {
  setTooltipContent: (name: string) => void
}

export function MapChart({setTooltipContent}: Props) {

  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"


  return (
    <ComposableMap data-tip="">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={() => {
                const { NAME_LONG } = geo.properties;
                setTooltipContent(NAME_LONG)
              }}
              style={{
                default: {
                  fill: "#D6D6DA",
                  outline: "none"
                },
                hover: {
                  fill: "#F53",
                  outline: "none"
                },
                pressed: {
                  fill: "#E42",
                  outline: "none"
                }
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}