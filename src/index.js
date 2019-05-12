import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'
import LayoutScene from 'components/LayoutScene'
import store from 'src/redux/store'
import 'assets/styles.css'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(() =>
  <Provider store={store}>
    <Router>
      <LayoutScene />
    </Router>
  </Provider>,
)

if (module.hot) {
  module.hot.accept()
}
