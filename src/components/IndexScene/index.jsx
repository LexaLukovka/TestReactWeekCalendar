import React, { Component } from 'react'
import { array, func, number, object, shape } from 'prop-types'
import { withStyles } from '@material-ui/core'
import WeekCalendar from 'react-week-calendar'
import Event from 'components/common/Event'
import HeaderCell from 'components/common/HeaderCell'
import { getIndex, isFullSelectedInterval } from 'utils/getIndex'
import { getRandomColor } from 'utils/getColor'
import 'react-week-calendar/dist/style.less'
import moment from 'moment'
import connector from './connector'

const styles = ({
  root: {
    paddingTop: 64,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    alignSelf: 'center',
    width: '100%',
  },
  calendar: {
    margin: 50,
  },
})

class IndexScene extends Component {
  componentDidMount() {
    document.title = 'Test'
  }

  handleEventRemove = uid => () => {
    const { selectedIntervals, actions } = this.props
    const index = selectedIntervals.findIndex(interval => interval.uid === uid)
    if (index > -1) {
      actions.removeInterval(selectedIntervals, index)
    }
  }

  handleSelect = newIntervals => {
    const { lastUid, selectedIntervals, actions } = this.props

    const intervals = newIntervals.map((interval, index) => ({
      ...interval,
      uid: lastUid + index,
      background: getRandomColor(),
    }))

    actions.addInterval(selectedIntervals.concat(intervals), lastUid + newIntervals.length)
  }

  handleSelectIntervals = date => () => {
    const { selectedIntervals, actions } = this.props

    const index = getIndex(selectedIntervals, date)

    if (index > -1) {
      actions.removeInterval(selectedIntervals, index)
      return false
    }

    const data = [{
      start: moment(date).hour(0).minute(0).second(0),
      end: moment(date).hour(23).minute(59).second(0),
    }]

    this.handleSelect(data)

    return true
  }

  renderEvent = props => <Event {...props} onClick={this.handleEventRemove} />

  renderHeader = props => (
    <HeaderCell
      {...props}
      onClick={this.handleSelectIntervals}
      isFullDay={isFullSelectedInterval(this.props.selectedIntervals, props.date)}
    />
  )

  render() {
    const { classes, selectedIntervals } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.calendar}>
            <WeekCalendar
              scaleUnit={60}
              useModal={false}
              numberOfDays={7}
              dayFormat="dd, DD.MM"
              selectedIntervals={selectedIntervals}
              headerCellComponent={this.renderHeader}
              eventComponent={this.renderEvent}
              startTime={moment({ h: 0, m: 0, s: 0 })}
              endTime={moment({ h: 23, m: 59, s: 0 })}
              onIntervalSelect={this.handleSelect}
              onIntervalRemove={this.handleEventRemove}
            />
          </div>
        </div>
      </div>
    )
  }
}

IndexScene.propTypes = {
  classes: object.isRequired,
  lastUid: number.isRequired,
  selectedIntervals: array.isRequired,
  actions: shape({
    addInterval: func.isRequired,
    removeInterval: func.isRequired,
  }),
}

export default withStyles(styles)(connector(IndexScene))
