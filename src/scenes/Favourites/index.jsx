import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { removeFavourite } from '../../services/actions'

class Favourites extends Component {

  handleClick = (item) => {
    this.props.removeFavourite(item)
  }

  render() {
    const { Favourites } = this.props
    console.log('favourites', Favourites)
    return (
      <div className="container">
        <div align="center" style={{ marginTop: 50 }}>
          <div
            // TODO: shrink width when on smaller screen size
            style={{ marginBottom: 20, width: 600, fontSize: 40, outline: 'none', color: 'gray' }}
          >
            Saved Favourites
          </div>
            {!isEmpty(Favourites) ? (
              Favourites.map(({images, url, id}) => {
                return (
                  <img
                    src={images.fixed_width.url}
                    alt={url}
                    key={id}
                    style={{ width: 250, height: 200, padding: 10, objectFit: 'cover' }}
                    onClick={() => this.handleClick({images, url, id})}
                  />
                )
              })
            ) : (
              <p>No favourites saved yet!</p>
            )
            }
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
