import React ,{Component} from 'react';
import { Card, CardLink, CardBody,CardTitle,CardText} from 'reactstrap';
import {Row,Col,Container} from 'reactstrap';
import { USERS } from '../shared/users';
import Header from './Header.js'

import '../login.css'

class Author extends Component{
  constructor(){
    super();
    this.state = {
        
        data :[]
        };
      }
      componentDidMount()
      {
        let url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url,{
          method:'GET'
     })
  .then((result)=>{
    result.json().then((resp)=>{
      this.setState({data:resp})
    })
  })
}


  render(){
    const data = this.state.data;
    //console.log(data);

    let usercards = this.state.data.map(user =>{
      return(
       
       <Col className ="offset-md-3" md ="7"> 
       <br/>
       <Card  className = "card" variant ="outlined">
            <CardBody>
            <Row>
                <CardTitle><h5>{user.id}.{user.name}</h5></CardTitle>
                <CardLink className ="link" href="todos">Todos</CardLink>
                 <CardLink    href="about">About</CardLink>
                
                </Row>
                
               </CardBody>
          </Card>
      </Col>
      
      
      )
  })
    return(
      <div>
        <Header/>
        <br/>
        <Row className ="offset-md-3" md={3}>
        <h1 style={{color:'black',fontWeight:'bold',textDecoration:'underline'}}>Authors Lists</h1>
        </Row>
        <Container fluid>
                 <Row>
                     {usercards}
                 </Row>
             </Container>
        
        </div>
    )
  }
}
  export default Author;
  