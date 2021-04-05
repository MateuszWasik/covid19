type Props = {
  date: string
}

export function ShowCurrentDate({date}: Props) {

  return(
    <div className="current-date">
      <span>{date}</span>
    </div>
  )
}