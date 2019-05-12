import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import calendar from 'src/redux/calendar/action'

const initMapStateToProps = store => ({
  lastUid: store.calendar.lastUid,
  selectedIntervals: store.calendar.selectedIntervals,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    addInterval: bindActionCreators(calendar.addInterval, dispatch),
    removeInterval: bindActionCreators(calendar.removeInterval, dispatch),

    clearInterval: bindActionCreators(calendar.clearInterval, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
