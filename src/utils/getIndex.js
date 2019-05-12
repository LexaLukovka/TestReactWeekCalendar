import moment from 'moment'

export const getIndex = (selectedIntervals, date) => {
  const start = moment(date).hour(0).minute(0).second(0)
  const end = moment(date).hour(23).minute(59).second(0)

  return selectedIntervals.findIndex(interval =>
    moment(interval.start).isSame(start) && moment(interval.end).isSame(end))
}

export const isFullSelectedInterval = (selectedIntervals, date) =>
  getIndex(selectedIntervals, date) > -1
