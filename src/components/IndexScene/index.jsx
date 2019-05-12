import React, { Component } from 'react'
import { array, func, number, object, shape } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'
import WeekCalendar from 'react-week-calendar'
import Event from 'components/common/Event'
import HeaderCell from 'components/common/HeaderCell'
import { getIndex, isFullSelectedInterval } from 'utils/getIndex'
import { getRandomColor } from 'utils/getColor'
import 'react-week-calendar/dist/style.less'
import moment from 'moment'
import connector from './connector'

const styles = theme => ({
  root: {
    marginTop: 64,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    alignSelf: 'center',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      alignSelf: 'flex-start',
    },
  },
  calendar: {
    margin: 50,
    [theme.breakpoints.down('md')]: {
      margin: 20,
    },
    [theme.breakpoints.down('sm')]: {
      margin: 5,
    },
  },
  flexRight: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    margin: 10,
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
      end: moment(interval.end),
      start: moment(interval.start),
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

  handleSaveChange = () => {
    const { selectedIntervals, actions } = this.props

    const newSelectedIntervals = selectedIntervals.map(interval => ({
      ...interval,
      start: moment(interval.start).toString(),
      end: moment(interval.end).toString(),
    }))

    localStorage.setItem('selectedIntervals', JSON.stringify(newSelectedIntervals))

    actions.showMessage('Save intervals')
  }

  handleClearInterval = () => {
    const { actions } = this.props
    actions.clearInterval()
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

            <div className={classes.flexRight}>
              <Button className={classes.button} onClick={this.handleClearInterval}>Clear</Button>
              <Button className={classes.button} onClick={this.handleSaveChange}>Save Changes</Button>
            </div>
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
    showMessage: func.isRequired,
  }),
}

export default withStyles(styles)(connector(IndexScene))
