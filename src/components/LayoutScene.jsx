import React from 'react'
import { Route, Switch } from 'react-router-dom'
import withTheme from 'utils/withTheme'
import Header from 'components/common/Header'
import Alert from 'components/common/Alert'
import IndexScene from 'components/IndexScene'

const LayoutScene = () =>
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={IndexScene} />
    </Switch>
    <Alert />
  </div>

export default withTheme(LayoutScene)
