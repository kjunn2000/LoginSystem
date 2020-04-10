import React from 'react';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import NavComponent from './components/nav'
import About from './pages/about';
import Home from './pages/home';

class App extends React.Component {
  render(){
    
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavComponent/>
          
          
        </Container>
        <Switch>
          <Route path="/"  exact component = {Home} />
          <Route path="/about" component = {About} />
        </Switch>
      </Router>
    )
  }}


export default App;
