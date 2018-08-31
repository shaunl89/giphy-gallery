import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGIFS } from '../../services/actions';

class Home extends Component {

  handleKeyPress = (event) => {
    event.persist()
    setTimeout(
      () => this.props.getGIFS(event.target.value),
      500,
    )
  }

  render() {
    console.log('results', this.props.Results)
    return (
      <div className="container">
        <div align="center" style={{ marginTop: 50 }}>
          <form>
            <input
              placeholder="Search for a GIF!"
              onKeyUp={this.handleKeyPress}
            />
          </form>
          {this.props.Results.map(({images, url, id}) => {
            return (
              <img
                src={images.fixed_width.url}
                alt={url}
                key={id}
                style={{ width: 250, height: 200, padding: 10, objectFit: 'cover' }}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Results: state.results,
});

const mapDispatchToProps = {
  getGIFS,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
