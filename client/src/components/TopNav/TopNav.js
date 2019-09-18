import React, { useContext } from "react";
import API from "../../utils/API";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaUserAlt } from "react-icons/fa";
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
  <Navbar.Brand href="/"><img src="./assets/images/logotrans.png" alt="logo" width="250px" /></Navbar.Brand>
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