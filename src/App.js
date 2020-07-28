import React from 'react';
import {Row,Col, Button} from 'reactstrap';
import logo from './logo.svg';
import Home from './components/Home.js';
import Author from './components/Authors.js'
import Login from './components/login.js';
import Todos from './components/Todos.js';
import About from './components/About.js';
import Comments from './components/Comments.js';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';



class App extends React.Component{
  render(){
    return (
      <div>
        <Router>
        <div className="App">
        <Switch>
          
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/author" component={Author}/>
          <Route exact path="/todos" component={Todos}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/comments" component={Comments}/>
          </Switch>
        </div>
    </Router>
      
       
      
        </div>
        
    )
  }
}

export default App;
