import React  from 'react';
import '../cards.css'
import { Card, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
class Cards extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props)
        return(
            
            <div>
                <br/>
             <Card className = "card"  variant ="outlined">
            
                <CardBody>
                    <CardTitle><h1><a href ="comments" style= {{color:'black'}}>{this.props.post.title}</a></h1></CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>{this.props.post.body}</CardText>
                </CardBody>
              </Card>
            </div>  
        )
    }
}

export default Cards;