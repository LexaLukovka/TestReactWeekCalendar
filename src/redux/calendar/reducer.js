import { ADD_INTERVAL, REMOVE_INTERVAL } from './action'

const initialState = {
  lastUid: 0,
  selectedIntervals: [],
}

const calendarReducer = (state = initialState, { type, payload, meta }) => {
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

    default: {
      return state
    }
  }
}

export default calendarReducer
