import React,{Component} from 'react';
import Header from './Header.js'
import {Row,Col} from 'reactstrap'
import { COMMENTS } from '../shared/comments.js';

function Comments() {
   
    
        return (
      <div >
          <Header/>
          <br/>
          <Row>
                <Col className="offset-md-1" md={4}>
                    <h1 style={{color:'black',fontWeight:'bold',textDecoration:'underline'}}>Post Details</h1>
                </Col>
            </Row>
               </div>
    );
        }
  
  
  export default Comments;