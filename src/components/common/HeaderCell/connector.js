import { connect } from 'react-redux'

const initMapStateToProps = store => ({
  selectedIntervals: store.calendar.selectedIntervals,
})

const initMapDispatchToProps = () => ({
  actions: {},
})

export default connect(initMapStateToProps, initMapDispatchToProps)
