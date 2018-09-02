import React from 'react'
import styles from './styles'
class Footer extends React.Component {
  render() {
    return (
      <div className='fixed-bottom' style={styles.footer}>
        <div style={styles.footerContentLeft}>
          Gallereasy POC Web App
        </div>
        <div style={styles.footerContentRight}>
          2359 Media
        </div>
      </div>
    )
  }
}

export default Footer