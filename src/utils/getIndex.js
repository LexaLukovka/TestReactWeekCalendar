import moment from 'moment'

export const getIndex = (selectedIntervals, date) => {
  const start = moment(date.toString()).hour(0).minute(0).second(0)
  const end = moment(date.toString()).hour(23).minute(59).second(0)

  return selectedIntervals.findIndex(interval =>
    moment(interval.start.toString()).isSame(start) && moment(interval.end.toString()).isSame(end))
}

export const isFullSelectedInterval = (selectedIntervals, date) =>
  getIndex(selectedIntervals, date) > -1
