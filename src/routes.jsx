import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './scenes/Home';
import Favourites from './scenes/Favourites';
import Application from './Application';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favourites" component={Favourites} />
        <Route exact path="/application" component={Application} />
      </Switch>
    );
  }
}

export default Routes