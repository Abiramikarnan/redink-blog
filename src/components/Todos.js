import React,{Component} from 'react';
import Header from './Header.js'

import {Row,Col, Modal,ModalHeader,ModalBody,ModalFooter,Label,Form,FormGroup,Input,Button} from 'reactstrap';


class Todos extends Component{
  constructor(){
    super();
    this.state = {
        
        modalIsopen : false
           
    };
}
togglemodal(){
  this.setState(
      {
         modalIsopen : ! this.state.modalIsopen
      }
  )
}

  render(){
    return (
      <div >
        <Header/>
        <br/>
        <h3> Authors Todos List</h3>
            <Row>
                <Col className="offset-md-10" md ={2}>
                 <Button outline color="success" onClick = {this.togglemodal.bind(this)}>Add Todo</Button>
                </Col>
            </Row>
            <Modal isOpen = {this.state.modalIsopen}>
                <ModalHeader toggle = {this.togglemodal.bind(this)}><h3>Add Post</h3></ModalHeader>
                <ModalBody>
                <Form >
                    <h5>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="email" name="email" id="title" placeholder="Title" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="user">User Name</Label>
                        <Input type="select" name="select" id="user" placeholder="Select Todo status">
                        <option> Select Todo status</option>
                        <option> completed</option>
                        <option> Not completed</option>
                        </Input>
                     </FormGroup>
                    
                    </h5>
                </Form>
                    </ModalBody>
                <ModalFooter>
                    <Button color = "primary">submit</Button>
                </ModalFooter>
                </Modal>

        
      </div>
    );
  }
}
  
  export default Todos;
  