import { CovidData } from '../dashboard/Dashboard.component'

type Props = {
  tooltipElement: Partial<CovidData>

}

export function TooltipContent({tooltipElement}: Props) {

  return (
    <div className="tooltip_content">
      <div className="tooltip_content__country_name">
        <span>Country: </span>
        <span>{tooltipElement.Country}</span>
      </div>
      <div className="tooltip_content__new_confirmed">
        <span>New confirmed: </span>
        <span>{tooltipElement.NewConfirmed}</span>
      </div>

      <div className="tooltip_content__total_confirmed">
        <span>Total confirmed: </span>
        <span>{tooltipElement.TotalConfirmed}</span>
      </div>
    </div>
  )
}