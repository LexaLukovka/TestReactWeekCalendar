import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const propTypes = {
  firstDay: PropTypes.object.isRequired,
  numberOfDays: PropTypes.number.isRequired,
  headerCellComponent: PropTypes.func.isRequired,
  dayFormat: PropTypes.string.isRequired,
  columnDimensions: PropTypes.array.isRequired,
}

const CalendarHeader = ({ firstDay, numberOfDays, dayFormat, columnDimensions, headerCellComponent }) => {
  const HeaderCell = headerCellComponent

  if (columnDimensions.length === 0) {
    return null
  }

  const weekdayColumns = []
  let totalWidth = 0

  for (let i = 0; i < numberOfDays; i += 1) {
    const date = moment(firstDay)
      .add(i, 'd')
      .hour(0)
      .minute(0)
      .second(0)

    const { width } = columnDimensions[i]
    totalWidth += width

    const newCell = (
      <div key={i} className="weekCalendar__headerColumn" style={{ width }}>
        <HeaderCell date={date} dayFormat={dayFormat} />
      </div>
    )
    weekdayColumns.push(newCell)
  }

  return (
    <div style={{ width: totalWidth }} className="weekCalendar__headerWrapper">
      {weekdayColumns}
    </div>)
}

CalendarHeader.propTypes = propTypes

export default CalendarHeader
