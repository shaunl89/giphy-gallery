import React, { Component } from 'react'

class ImageCube extends Component {
  render() {
    const { src, alt, style, onClick } = this.props
    return (
      <div>
        <img
          src={src}
          alt={alt}
          style={style}
          onClick={onClick}
        />
      </div>
    )
  }
}

export default ImageCube