import React from 'react';
import {Row,Col, Button} from 'reactstrap';

import Cards from './cards';
import '../Home.css'
import { Container } from 'react-bootstrap';
import { POSTS } from '../shared/posts.js';

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            posts: POSTS,
            
            
        };
    }
   displaypost(){
      return(
          alert('aii got it!!')
      )
  }
    render(){
       // console.log(this.state.posts)
       
       let postcards = this.state.posts.map(post =>{
           return(
            <Col className ="offset-md-1" sm ="10"> 
            <Cards post = {post}/>
           </Col>
           
           )
       })
       
       
       return(
        <div>
           
            <Row>
                <Col className="offset-md-10" md ={2}>
                 <Button outline color="success" onClick = {this.displaypost}>Add post</Button>
                </Col>
            </Row>
            <Row>
                <Col className="offset-md-1" md={2}>
                    <h1 style={{color:'black',fontWeight:'bold',textDecoration:'underline'}}>Posts</h1>
                </Col>
            </Row>
        
         <div>
             <Container fluid>
                 <Row>
                     {postcards}
                 </Row>
             </Container>
             
         </div>
         </div>
         
         

        )
    }
}

export default Home;