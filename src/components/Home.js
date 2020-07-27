import React from 'react';
import {Row,Col, Button} from 'reactstrap';

import Cards from './cards';
import '../Home.css'
import { Container } from 'react-bootstrap';
import { POSTS } from '../shared/posts.js';
import { USERS } from '../shared/users';

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            posts: POSTS,
            users:USERS
            
        };
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
            <Row>
                <Col className="offset-md-10" md ={2}>
                 <Button outline color="success">Add post</Button>
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