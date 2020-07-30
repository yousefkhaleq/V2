import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from './components/Footer';


class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: "Yousef Khaleq",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home:{
        title: 'Welcome',
        subTitle: 'To my page!',
        text: 'Click on the cards below for more info!'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Contact Me'
      }   
    }
  }

  render(){
  return (
    <Router> 
      <Container className="p-0" fluid={true}> 
        
        <Navbar className="border-bottom" bg="transparent" expand='lg'> 
          <Navbar.Brand> Yousef Khaleq </Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className='ml-auto'>
              <Link style={{ marginRight: 10, color: 'inherit', textDecoration: 'inherit'}} classname="nav-link" to="/">Home</Link>
              <Link style={{ marginRight: 10, color: 'inherit', textDecoration: 'inherit'}} classname="nav-link" to="/about">About</Link>
             
            
      
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
        <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />

        <Footer />

      </Container>
    </Router>
  );
  }
}

export default App;
