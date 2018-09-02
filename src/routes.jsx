import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './scenes/App'
import Home from './scenes/Home'
import Favourites from './scenes/Favourites'

class Routes extends React.Component {
  render() {
    return (
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favourites" component={Favourites} />
        </Switch>
      </App>
    )
  }
}

export default Routes