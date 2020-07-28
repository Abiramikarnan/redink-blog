import React  from 'react';
import '../cards.css'
import {Link} from 'react-router-dom';
import {Row,Col, Card, CardText, CardBody,CardTitle, CardSubtitle,CardLink ,
    Modal,ModalHeader,ModalBody,ModalFooter,Label,Form,FormGroup,Input,Button} from 'reactstrap';
class Cards extends React.Component{
    constructor(props){
        super(props);
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
        console.log(this.props)
        return(
            
            <div>
                <br/>
             <Card className = "card"  variant ="outlined">
            
                <CardBody>
                    
                <CardText>
                <Row className = "offset-md-10" md={1}>
                <h5 >
                    <Col >
                <a href ="#"  style={{textDecoration:'none',color:'primary'}}   onClick = {this.togglemodal.bind(this)}>Edit</a>
                
                <a href ="#"  style={{textDecoration:'none',color:'primary',paddingRight:"2px"}} className ="offset-md-2"  >Delete</a>
               
                </Col>
                </h5>
                </Row>
                </CardText>
                
                <CardTitle><h1><a href ="comments" style= {{textDecoration:'none',color:'black'}}>{this.props.post.title}</a></h1></CardTitle>
                    
                    <CardSubtitle><a href ="#" style= {{textDecoration:'none',color:'primary',fontStyle:'italic'}}>Author</a></CardSubtitle>
                    <CardText>{this.props.post.body}</CardText>
                </CardBody>
              </Card>

              <Modal isOpen = {this.state.modalIsopen}>
                <ModalHeader toggle = {this.togglemodal.bind(this)}><h3>Edit Post</h3></ModalHeader>
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

export default Cards;