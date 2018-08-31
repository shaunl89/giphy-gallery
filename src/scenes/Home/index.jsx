import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { getGIFS } from '../../services/actions';

class Home extends Component {

  state = {
    visible: 8,
  }

  handleKeyPress = (event) => {
    event.persist()
    setTimeout(
      () => this.props.getGIFS(event.target.value),
      500,
    )
  }

  handleLoadMore = () => {
    this.setState({
      visible: this.state.visible + 8
    })
  }

  render() {
    console.log('results', this.props.Results)
    const { Results, isLoading } = this.props
    return (
      <div className="container">
        <div align="center" style={{ marginTop: 50 }}>
          <form>
            <input
              placeholder="Search for a GIF!"
              onKeyUp={this.handleKeyPress}
            />
          </form>
          {/* TODO: add isLoading spinner */}
          {Results.slice(0, this.state.visible).map(({images, url, id}) => {
            return (
              <img
                src={images.fixed_width.url}
                alt={url}
                key={id}
                style={{ width: 250, height: 200, padding: 10, objectFit: 'cover' }}
              />
            )
          })}
          {!isEmpty(this.props.Results) && !isLoading && !(this.state.visible >= Results.length) ? (
              <div className="col-12">
                <button className="btn btn-light mx-auto mt-3 mb-3" onClick={this.handleLoadMore}>Load more</button>
              </div>
          ) : null}
          {!isEmpty(this.props.Results) && !isLoading && (this.state.visible >= Results.length) ? (
            <div className="col-12">
              <h6 className="mx-auto mt-3 mb-3">End of Results</h6>
            </div>
          ) : null}
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
