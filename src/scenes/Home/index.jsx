import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGIFS } from '../../services/actions';

class Home extends Component {
  componentDidMount() {
    // call getGIF action
    this.props.getGIFS()
  }

  render() {
    return (
      <div className="container">
        <h1>HOME</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Results: state.Results,
});

const mapDispatchToProps = {
  getGIFS,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
