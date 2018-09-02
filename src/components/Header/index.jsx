import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap'
import styles from './styles'
class Header extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  
  render() {
    const { Favourites } = this.props
    return (
      <Navbar color='light' light expand='md'>
        <div className='container'>
          <NavbarBrand style={styles.navLogo}>
            Galler<b style={styles.navLogoBold}>easy</b>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink
                  exact
                  to='/'
                  style={{ ...styles.navLink, ...{ marginRight: 16 } }}
                  activeStyle={styles.navLinkActive}
                >
                  Search
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to='/favourites'
                  style={styles.navLink}
                  activeStyle={styles.navLinkActive}
                >
                  Favourites ({Favourites.length})
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}

const mapStateToProps = state => ({
  Favourites: state.favourites,
})

// https://github.com/reduxjs/react-redux/blob/master/docs/troubleshooting.md#my-views-arent-updating-when-something-changes-outside-of-redux
export default connect(mapStateToProps, null, null, {pure: false})(Header)