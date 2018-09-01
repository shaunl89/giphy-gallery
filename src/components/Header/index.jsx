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
      <Navbar color="light" light expand="md">
        <div className="container">
          <NavbarBrand style={{ marginRight: 32, color: '#A9A9A9'}}>Galler<b style={{ color: '#696969'}}>easy</b></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  exact
                  to="/"
                  style={{ marginRight: 16, color: '#A9A9A9', textDecoration: 'none' }}
                  activeStyle={{ color: '#696969' }}
                >
                  Search
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to="/favourites"
                  style={{ color: '#A9A9A9', textDecoration: 'none' }}
                  activeStyle={{ color: '#696969' }}
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