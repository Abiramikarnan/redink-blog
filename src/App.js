import React from 'react';
import {Router,Route,browserHistory} from 'react-router';
import {Row,Col, Button} from 'reactstrap';
import logo from './logo.svg';
import Home from './components/Home.js';
import Author from './components/Authors.js'


class App extends React.Component{
  render(){
    return (
      <div>
      <br/>
      <Row style={{margin:'0px'}}>            
          <Col  md={3}> 
          <h4 className="blog"><a href="#" style={{textDecoration:'none',color:'blue',fontWeight:'bold'}}>BLOG</a></h4>
          </Col>
          <Col className="offset-md-2" md={2}>
          <h5> <a href="#" style={{textDecoration:'none',color:'black'}}>Home</a></h5>
          </Col>
          <Col className="offset-md-3" md={1}>
               <a href="#" style={{textDecoration:'none',color:'blue'}} >Authors</a>
          </Col>
          <Col md={1}>      
              <a href="#" style={{textDecoration:'none',color:'red'}}>Logout</a>
          </Col>
      </Row>
      
        
        <Author/>
        
      
        </div>
        
    )
  }
}

export default App;
