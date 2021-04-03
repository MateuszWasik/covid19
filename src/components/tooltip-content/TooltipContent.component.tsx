
type Props = {
  countryName: string
}

export function TooltipContent({countryName}: Props) {

  return(
    <div className="tooltip-content">
      <span>Country: </span>
      <span>{countryName}</span>
    </div>
  )
}