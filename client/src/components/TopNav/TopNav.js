import React, { useContext } from "react";
import API from "../../utils/API";
import { Nav, Navbar, NavDropdown, FormControl, Form, Button } from 'react-bootstrap';
import { FaUserAlt } from "react-icons/fa";
// import { LinkContainer } from 'react-router-bootstrap';
import UserProvider from "../../contexts/UserProvider";

const Navigation = () => {
    const {loggedIn, user} = useContext(UserProvider.context);  

    const logout = () => {
        API.logout().then((data)=> {
            window.location.pathname = "/"
        }).catch((err)=> {
            console.log(err)
        })
    }

    return (
        <>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">KanGoPak</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="justify-content-end">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/newtrip">New Trip</Nav.Link>
      <NavDropdown title={<FaUserAlt />} id="basic-nav-dropdown">
        
        {loggedIn ? 
        <>
        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
        <NavDropdown.Item href="/trips">My Trips</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
        </> :
        <>
        <NavDropdown.Item href="/learnmore">Learn More</NavDropdown.Item>
        <NavDropdown.Divider />
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
        <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
        </>
        }
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default Navigation;


// import React, { Component } from "react";
// import "./TopNav.scss";
// import API from "../../utils/API";
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
// } from 'reactstrap';

// export default class Navigation extends Component {

//     constructor(props) {
//         super(props);
//         this.toggle = this.toggle.bind(this);
//         this.state = {
//             isOpen: false,
//             loggedIn: false
//         };
//     }

//     componentDidMount() {
//         API.isLoggedIn().then(user => {
//             if (user.data.loggedIn) {
//                 this.setState({
//                     loggedIn: true
//                 });
//             }
//         }).catch(err => {
//             console.log(err);
//         });
//     }



//     toggle() {
//         this.setState({
//             isOpen: !this.state.isOpen
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <Navbar className="navbar" light expand="md">
//                     <NavbarBrand href="/" className="titleFont"><i className="fas fa-key"></i> React Auth</NavbarBrand>
//                     <NavbarToggler onClick={this.toggle} />
//                     <Collapse isOpen={this.state.isOpen} navbar>
//                         <Nav className="ml-auto" navbar>
//                             <NavItem>
//                                 <NavLink href="/"><i className="fas fa-home light-text"></i></NavLink>
//                             </NavItem>
//                             <UncontrolledDropdown nav inNavbar>
//                                 <DropdownToggle nav caret>
//                                     <i className="fas fa-user light-text"></i>
//                                 </DropdownToggle>
//                                 <DropdownMenu right>
//                                     {this.state.loggedIn ? (
//                                         <>
//                                             <DropdownItem>
//                                                 <NavLink href="/profile">Profile</NavLink>
//                                             </DropdownItem>
//                                             <DropdownItem>
//                                                 <NavLink onClick={this.logout}>Logout</NavLink>
//                                             </DropdownItem>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <DropdownItem>
//                                                 <NavLink href="/login">login</NavLink>
//                                             </DropdownItem>
//                                             <DropdownItem>
//                                                 <NavLink href="/signup">signup</NavLink>
//                                             </DropdownItem>
//                                         </>
//                                     )}
//                                 </DropdownMenu>
//                             </UncontrolledDropdown>
//                         </Nav>
//                     </Collapse>
//                 </Navbar>
//             </div>
//         );
//     }
// }