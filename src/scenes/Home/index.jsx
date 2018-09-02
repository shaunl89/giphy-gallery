import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isEmpty, slice, find, debounce } from 'lodash'
import { getGIFS, addFavourite, removeFavourite } from '../../services/actions'
import '../App/custom.css'
// TODO: remove all semicolons
// TODO: remove all console.logs
// TODO: add proptypes
class Home extends Component {
  state = {
    visible: 8,
  }

  // https://stackoverflow.com/questions/23123138/perform-debounce-in-react-js
  debounceAPICall = debounce((e) => {
    this.props.getGIFS(e.target.value)
  }, 500)

  handleKeyPress = (event) => {
    event.persist()
    this.debounceAPICall(event)
  }

  handleLoadMore = () => {
    this.setState({
      visible: this.state.visible + 8
    })
  }

  favourite = (item) => {
    console.log(item.id)
    if (find(this.props.Favourites, item)) {
      this.props.removeFavourite(item)
    } else {
      this.props.addFavourite(item)
    }
  }

  render() {
    console.log('results', this.props.Results)
    console.log('favourites', this.props.Favourites)
    const { Results, noResults, Favourites, isLoading } = this.props
    return (
      <div className="container">
        <div align="center" style={{ marginTop: 30 }}>
          <form style={{ marginBottom: 20 }}>
            <input
              placeholder="Start searching for images!"
              onKeyUp={this.handleKeyPress}
              // TODO: shrink width when on smaller screen size
              style={{ width: 600, border: 'none', borderBottom: '1px solid #A9A9A9', fontSize: 40, outline: 'none' }}
            />
          </form>
          {isLoading ? (
            <i className="fa fa-spinner fa-spin" style={{ marginTop: 80, fontSize: 80 }}></i>
          ) : (
            slice(Results, 0, this.state.visible).map(({images, url, id}) => {
              return (
                <div
                  key={id}
                  className="image-container"
                  style={{ position: 'relative', display: 'inline-block' }}
                >
                  {(find(Favourites, {images, url, id})) ? (
                    <div>
                      <span className="fa fa-heart favourite-heart"></span>
                    </div>
                  ) : (
                    <div>
                      <span className="fa fa-heart hover-heart"></span>
                    </div>
                  )}
                  <div>
                    <img
                      src={images.fixed_width.url}
                      alt={url}
                      style={{ width: 250, height: 200, margin: 10, objectFit: 'cover', cursor: 'pointer' }}
                      onClick={() => this.favourite({images, url, id})}
                    />
                  </div>
                </div>
              )
            })
          )}
          {noResults ? (
            <p>No results found!</p>
          ) : null}
          {!isEmpty(this.props.Results) && !isLoading && !(this.state.visible >= Results.length) ? (
              <div className="col-12">
                <button className="btn btn-light mx-auto mt-3 mb-1" onClick={this.handleLoadMore}>Load more</button>
              </div>
          ) : null}
          {!isEmpty(this.props.Results) && !isLoading && (this.state.visible >= Results.length) ? (
            <div className="col-12">
              <div>
                <h6 className="mx-auto mt-3 mb-3" style={{ display: 'inline-block', border: '1px solid grey', padding: 10 }}>End of Results</h6>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  Results: state.results,
  noResults: state.noResults,
  isLoading: state.isLoading,
  Favourites: state.favourites,
})

const mapDispatchToProps = {
  getGIFS,
  addFavourite,
  removeFavourite,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
