import React from 'react';
import { withRouter } from 'react-router-dom';
import { StyleRoot } from 'radium';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class App extends React.Component {
  render() {
    return (
      <StyleRoot>
        <Header />
          <NotificationContainer />
          {this.props.children}
        <Footer />
      </StyleRoot>
    );
  }
}

export default withRouter(App);