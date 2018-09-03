import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isEmpty, slice, find, debounce } from 'lodash'
import Radium from 'radium'
import { getGIFS, addFavourite, removeFavourite } from '../../services/actions'
import ImageCube from '../../components/ImageCube'
import styles from './styles'
import '../App/custom.css'

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
    if (event.charCode === 13) {
      event.preventDefault()
      return
    }
    this.debounceAPICall(event)
  }

  handleLoadMore = () => {
    this.setState({
      visible: this.state.visible + 8
    })
  }

  handleClick = (item) => {
    if (find(this.props.favourites, item)) {
      this.props.removeFavourite(item)
    } else {
      this.props.addFavourite(item)
    }
  }

  render() {
    const { results, noResults, favourites, isLoading } = this.props
    return (
      <div className="container">
        <div className="col-12" align="center" style={styles.container}>
          <form style={styles.form}>
            <input
              placeholder="Start searching for images!"
              onKeyPress={this.handleKeyPress}
              style={styles.inputField}
            />
          </form>
          {isLoading ? (
            <i className="fa fa-spinner fa-spin" style={styles.spinner}></i>
          ) : (
            slice(results, 0, this.state.visible).map(({images, url, id}) => {
              return (
                <div
                  key={id}
                  className="image-container"
                  style={{ position: 'relative', display: 'inline-block' }}
                >
                  {(find(favourites, {images, url, id})) ? (
                    <div>
                      <span className="fa fa-heart favourite-heart"></span>
                    </div>
                  ) : (
                    <div>
                      <span className="fa fa-heart hover-heart"></span>
                    </div>
                  )}
                  <ImageCube
                    src={images.fixed_width.url}
                    alt={url}
                    style={styles.imageBlock}
                    onClick={() => this.handleClick({images, url, id})}
                  />
                </div>
              )
            })
          )}
          {noResults ? (
            <p style={{ marginTop: 100 }}>No results found!</p>
          ) : null}
          {!isEmpty(this.props.results) && !isLoading && !(this.state.visible >= results.length) ? (
              <div className="col-12">
                <button className="btn btn-light mx-auto mt-1 mb-5" onClick={this.handleLoadMore}>Load more</button>
              </div>
          ) : null}
          {!isEmpty(this.props.results) && !isLoading && (this.state.visible >= results.length) ? (
            <div className="col-12">
              <div>
                <h6 className="mx-auto mt-3 mb-5" style={styles.endOfResults}>End of Results</h6>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  results: state.results,
  noResults: state.noResults,
  isLoading: state.isLoading,
  favourites: state.favourites,
})

const mapDispatchToProps = {
  getGIFS,
  addFavourite,
  removeFavourite,
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Home))
