import { Badge, Calendar } from 'antd'
import { Moment } from 'moment'
import { FC } from 'react'
import { IEvent } from '../models/IEvent'
import { formatData } from '../utils/date'

interface EventCalendarProps {
  events: IEvent[]
}

export const EventCalendar: FC<EventCalendarProps> = (
  props: EventCalendarProps
) => {
  function dateCellRender(value: Moment) {
    const formatedDate = formatData(value.toDate())
    const currentDayEvents = props.events.filter(
      (ev) => ev.date === formatedDate
    )
    return (
      <div>
        {currentDayEvents.map((ev, i) => (
          <div key={i}>{ev.description}</div>
        ))}
      </div>
    )
  }

  return <Calendar dateCellRender={dateCellRender} />
}
