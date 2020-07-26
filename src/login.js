import React from 'react';
import './App.css';
import { Button,Form,FormFeedback } from 'reactstrap';
import Home from './Home';
class Login extends React.Component{

    state = {
        user:{
        name:'',
        password:'',
        errors:{
            namev:'',
            passwordv:''
        }
    }

    };
   handleChange= e => {
    this.setState({ [e.target.name]: e.target.value })
  }


handleSubmit=e=>{
    
    const user=this.state.user;
    if(user.name==='')
    {
        user.errors.namev = "please fill out this field"
    }
    else if(user.password==='')
    {
       user.errors.passwordv = "please fill out this field"
    }
    this.setState({
        user:user
    })
}
  

    render(){
        console.log(this.state.user.errors.namev);
          const err = this.state.user.errors;
        if(err.namev===''||err.passwordv==='')
        {

        return(
            <div className = "center">
                <Form >
                    Username <input className = "input" type = "text" name = "name" placeholder = " Username(some text here)" 
                    value = {this.state.name} onChange = {this.handleChange}/>
                    <FormFeedback>{this.state.user.errors.namev}</FormFeedback>
                    <br/><br/>
                    Password <input className = "input" type = "password" name = "password" placeholder = " Password(some text here)"
                     value = {this.state.password} onChange = {this.handleChange}/>
                     <FormFeedback>{this.state.user.errors.passwordv}</FormFeedback>
                    <br/><br/>
                    <Button  onClick={this.handleSubmit}>Login</Button>
                </Form>
            </div>
        )
    }
    else{
        return(
            <div>
                <Home/>
            </div>
        )
    }
}
}
export default Login;