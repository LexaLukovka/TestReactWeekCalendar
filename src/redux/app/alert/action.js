export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'

const show = (message) => ({
  type: SHOW_ALERT,
  payload: message,
})

const hide = () => ({
  type: HIDE_ALERT,
})

export default { show, hide }
