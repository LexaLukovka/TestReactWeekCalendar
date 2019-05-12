export const ADD_INTERVAL = 'ADD_INTERVAL'
export const REMOVE_INTERVAL = 'REMOVE_INTERVAL'

const addInterval = (interval, lastUid) => ({
  type: ADD_INTERVAL,
  payload: interval,
  meta: lastUid,
})

const removeInterval = (interval, index) => ({
  type: REMOVE_INTERVAL,
  payload: interval,
  meta: index,
})

export default { addInterval, removeInterval }
