import { ADD_INTERVAL, CLEAR_INTERVAL, REMOVE_INTERVAL } from './action'
import moment from 'moment'

const initialState = () => {
  const selectedIntervals = JSON.parse(localStorage.getItem('selectedIntervals'))
  if (selectedIntervals) {
    const newSelect = selectedIntervals.map(value => ({
      ...value,
      start: moment(value.start),
      end: moment(value.end),
    }))

    return {
      lastUid: newSelect.length || 0,
      selectedIntervals: newSelect || [],
    }
  }

  return {
    lastUid: 0,
    selectedIntervals: [],
  }
}

const calendarReducer = (state = initialState(), { type, payload, meta }) => {
  switch (type) {
    case ADD_INTERVAL:
      return {
        ...state,
        lastUid: meta === 0 ? meta : (meta || state.lastUid),
        selectedIntervals: [...payload],
      }

    case REMOVE_INTERVAL: {
      const { selectedIntervals } = state
      selectedIntervals.splice(meta, 1)

      return {
        ...state,
        selectedIntervals: [...selectedIntervals],
      }
    }

    case CLEAR_INTERVAL:
      return {
        ...state,
        selectedIntervals: [],
      }

    default: {
      return state
    }
  }
}

export default calendarReducer
