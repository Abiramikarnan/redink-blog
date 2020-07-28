import React from 'react';
import {Row,Col} from 'reactstrap';
import {Link} from 'react-router-dom';

function Header(){

    return(
<div>
<br/>
      <Row style={{margin:'0px'}}>            
          <Col  md={3}> 
           <h4  ><Link style={{textDecoration:'none',color:'primary',fontWeight:'bold'}} to="/home">BLOG</Link></h4>
          </Col>
          <Col className="offset-md-2" md={2}>
          <h5 ><Link style={{textDecoration:'none',color:'black'}} to="/home">Home</Link></h5>
          </Col>
          <Col className="offset-md-3" md={1}>
            < h5  ><Link style={{textDecoration:'none',color:'primary'}} to="/author">Authors</Link></h5>
          </Col>
          <Col md={1}>      
          < h5 ><Link style={{textDecoration:'none',color:'red'}}   to="/">Logout</Link></h5>
          </Col>
      </Row>
      </div>
    );

       }

       export default Header;