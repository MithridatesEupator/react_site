import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import "font-awesome/css/font-awesome.min.css";

class NavbarCustom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return(
      <div>
      <Navbar className="navbar-custom">
        <NavbarToggler onClick={this.toggle} className="navbar-toggler"/>
        <NavbarBrand href="https://reactjs.org/" className="brand-custom">
          <i className="fab fa-react react-brand">
          </i>
          Powered by React.js
        </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem className="nav-item">
                <NavLink href="#resume-container"  className="resume nav-link">
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/MithridatesEupator" className="github nav-link">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarCustom;
