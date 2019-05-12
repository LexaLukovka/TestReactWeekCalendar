import React from 'react'
import { func, number, string } from 'prop-types'

const Event = ({ uid, background, onClick }) => (
  <div className="event" style={{ background }} onClick={onClick(uid)} />
)

Event.propTypes = {
  uid: number.isRequired,
  onClick: func.isRequired,
  background: string.isRequired,
}

export default Event
