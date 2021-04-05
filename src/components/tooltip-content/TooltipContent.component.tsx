import { CovidData } from '../dashboard/Dashboard.component'

import './TooltipContent.scss'

type Props = {
  tooltipElement: Partial<CovidData>
}

export function TooltipContent({tooltipElement}: Props) {

  return (
    <div className="tooltip_content">
      <div className="tooltip_content__country_name">
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

      <div className="tooltip_content__new_deaths">
        <span>New deaths: </span>
        <span>{tooltipElement.NewDeaths}</span>
      </div>

      <div className="tooltip_content__total_deaths">
        <span>Total deaths: </span>
        <span>{tooltipElement.TotalDeaths}</span>
      </div>

      <div className="tooltip_content__new_recovered">
        <span>New recovered: </span>
        <span>{tooltipElement.NewRecovered}</span>
      </div>

      <div className="tooltip_content__total_recovered">
        <span>Total recovered: </span>
        <span>{tooltipElement.TotalRecovered}</span>
      </div>
    </div>
  )
}