import React from 'react';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import NavComponent from './components/nav'
import About from './pages/about';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

class App extends React.Component {
  render(){
    
    return (
      <React.Fragment>
        <NavComponent/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component ={About}/>
            <Route path="/login" component ={Login}/>
            <Route path="/register" component ={Register}/>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }}


export default App;
