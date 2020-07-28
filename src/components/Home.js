import React from 'react';
import {Row,Col, Button,Modal,ModalHeader,ModalBody,ModalFooter,Label,Form,FormGroup,Input} from 'reactstrap';
import Cards from './cards';
import '../Home.css'
import { Container } from 'react-bootstrap';
import Header from './Header.js'

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            posts: [],
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

  componentDidMount()
  {
    let url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url,{
      method:'GET'
 })
.then((result)=>{
result.json().then((resp)=>{
  this.setState({posts:resp})
})
})
}

    render(){
        const posts = this.state.posts;
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
           <Header/>
            <Row>
                <Col className="offset-md-10" md ={2}>
                 <Button outline color="success" onClick = {this.togglemodal.bind(this)}>Add post</Button>
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
                        <Input type="select" name="select" id="user" placeholder="User Name">
                        <option> Select User</option>
                        <option> Leanne Graham</option>
                        <option> Ervin Howell</option>
                        <option>Clementine Bauch</option>
                        <option>Patricia Lebsack</option>
                        <option>Chelsey Dietrich</option>
                        <option>Mrs. Dennis Schulist</option>
                        <option>Kurtis Weissnat</option>
                        <option>Glenna Reichert</option>
                        <option>Nicholas Runolfsdottir V</option>
                        <option>Clementina DuBuque</option>
                        </Input>
                     </FormGroup>
                     <FormGroup>
                        <Label for="content">Content</Label>
                        <Input type="textarea" name="text" id="content" />
                    </FormGroup>
                    </h5>
                </Form>
                    </ModalBody>
                <ModalFooter>
                    <Button color = "primary">submit</Button>
                </ModalFooter>
                </Modal>

         </div>
         
         

        )
    }
}

export default Home;