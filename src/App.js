import './App.css';
import Home from './Home';

import Login from './Login';
import AddProjects from './AddProjects';
import Projects from './Projects';
import About from "./About";
import Contact from "./Contact";
import React,{Component, useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const App = () => {

  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("");

  function loggedIn(user){
    setUsername(user)
    if(user==="Savinu"){
      setStatus("admin");
    }
  }

  console.log(username);

  return ( 
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" render={()=>(
            <Login loggedIn={loggedIn} status={status}/>
          )}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" render={()=>(
            <Contact username = {username}/>
          )}/>
          {
            (username === 'Savinu')?
            <Route path="/addproject" component={AddProjects}/>
            : console.log('no admin access')
          }
        </Switch>
      </Router>
      
  </div>
    );
}
 
export default App;




