import React from 'react'  
import{BrowserRouter as Router,Link,Route} from 'react-router-dom';  // importing routing package
import{Navbar,Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'    // importing font awsome icon package
import { faHome,faSearch} from '@fortawesome/free-solid-svg-icons'
import './navbar.css';


function Navbar(){   // using functional component
    return(
        <div className='navbar'>
        <Router>                  {/*creating link for the components*/}
        <Navbar bg="light" expand="lg">
      { /* <Navbar.Brand href="#home">AdvocateConnect</Navbar.Brand> */ }
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Navbar.Brand href="#home"><h3>AdvocateConnect</h3></Navbar.Brand>
            <Nav.Link className='nav' href="#home"><Link to = '/'><FontAwesomeIcon icon = {faHome} color='black'/>Home</Link></Nav.Link>
            <Nav.Link className='nav' href="#upload"><Link to = '/upload'> Login</Link></Nav.Link>
            <Nav.Link className='nav' href="#search"><Link to = '/search'><FontAwesomeIcon icon = {faSearch} color='black'/>Search</Link></Nav.Link>
            <Nav.Link className='nav' href="#signUP"><Link to = '/signUp'>SignUp</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        {/*defining the routes*/} 
        <Route exact path = '/' component = {Home}></Route>
        <Route path = '/login' component = {Login}></Route>
        <Route path = '/search' component = {Search}></Route>
        <Route path = '/signUp' component = {SignUp}></Route>
        
        </Router>
        
        </div>
    )
}
export default AdvocateConnect; // exporting the component
