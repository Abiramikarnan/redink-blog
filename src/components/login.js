import React, { Component} from 'react';
import '../App.css';
import { Button,Input,Col,Row, Label, Container,Popover,PopoverHeader } from 'reactstrap';

class Login extends Component {

  state = {
    name:'',
    password:'',
    popname:false,
    poppassword:false,
    errors:{
        name:'',
        password:'',
    }
}

changeHandler = e => {
  this.setState({ [e.target.name]: e.target.value })
}

  toggle=e=>{
        
        if(this.state.name===''){
          this.state.errors.name="Email should not be empty";
          this.setState({
            popname:true
          })
        }
        else{
          this.state.errors.name=""
          this.setState({ 
            popname:false
          })
        }

        if(this.state.name!==''){
          if(this.state.password===''){
            this.state.errors.password="Email should not be empty";
            this.setState({
              poppassword:true
            })
          }
          else{
            this.state.errors.password=""
            this.setState({
              poppassword:false
            })
            alert("Login successful");
          }
          
        } 

      }


  render(){
    
    return (
      <div>
        <Container>
       <Row className="row-align" style={{paddingTop:"300px"}}>
         <Col style={{textAlign:"center"}} sm={12} md={1}>
            <Label>Username</Label>
         </Col>
         <Col sm={12} md={7}>
            <Input type="text" name="name" id="name" onChange={this.changeHandler}  placeholder = " Username (some text here)"/>
            <Popover placement="top" isOpen={this.state.popname} target="name">
                {this.state.errors.name!=="" ? <PopoverHeader>Please fill out this field</PopoverHeader>:""}
            </Popover>
         </Col>
       </Row>
       <Row className="row-align" style={{paddingTop:"15px"}}>
       <Col style={{textAlign:"center"}} sm={12} md={1}>
            <Label>Password</Label>
         </Col>
         <Col sm={12} md={7}>
            <Input type="password" id="password" name="password" onChange={this.changeHandler}  placeholder = " Password (some text here)"/>
            <Popover placement="bottom" isOpen={this.state.poppassword} target="password">
    {this.state.errors.password!=="" && <PopoverHeader>Please fill out this field</PopoverHeader>}
            </Popover>
         </Col>
       </Row>
       <Row className="row-align" style={{paddingTop:"20px"}}>
         <Col sm={12} md={2}> 
            <Button color="primary" type="submit" onClick={this.toggle}>Login</Button>
         </Col>
       </Row>
       </Container>
      </div>
    );
  }
}

export default Login;

