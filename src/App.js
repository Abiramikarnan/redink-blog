import React from 'react';
import {Router,Route,browserHistory} from 'react-router';
import logo from './logo.svg';
import Home from './components/Home.js';



class App extends React.Component{
  render(){
    return (
      <div>
        
        <Home/>
        
      
        </div>
        
    )
  }
}

export default App;
