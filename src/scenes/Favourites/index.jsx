import React, { Component } from 'react'
import { connect } from 'react-redux'
import { find, isEmpty } from 'lodash'
import { removeFavourite } from '../../services/actions'
import ImageCube from '../../components/ImageCube'
import styles from './styles'

class Favourites extends Component {

  handleClick = (item) => {
    this.props.removeFavourite(item)
  }

  render() {
    const { Favourites } = this.props
    return (
      <div className='container'>
        <div className="col-12" align='center' style={{ marginTop: 50, marginBottom: 50 }}>
          <div
            className="col-12"
            style={styles.title}
          >
            Saved Favourites
          </div>
          {!isEmpty(Favourites) ? (
            Favourites.map(({images, url, id}) => {
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
                ) : null}
                  <ImageCube
                    src={images.fixed_width.url}
                    alt={url}
                    style={styles.imageBlock}
                    onClick={() => this.handleClick({images, url, id})}
                  />
              </div>
              )
            })
          ) : (
            <p style={{ marginTop: 100 }}>No favourites saved yet!</p>
          )}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  removeFavourite,
}

const mapStateToProps = state => ({
  Favourites: state.favourites,
})

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)
