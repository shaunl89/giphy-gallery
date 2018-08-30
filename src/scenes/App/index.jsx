import React from 'react';
import { withRouter } from 'react-router-dom';
import { StyleRoot } from 'radium';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class App extends React.Component {
  render() {
    return (
      <StyleRoot>
        <Header />
          {this.props.children}
        <Footer />
      </StyleRoot>
    );
  }
}

export default withRouter(App);