import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import alert from 'src/redux/alert/action'

const initMapStateToProps = store => ({
  isVisible: store.alert.isVisible,
  message: store.alert.message,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    hide: bindActionCreators(alert.hide, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
