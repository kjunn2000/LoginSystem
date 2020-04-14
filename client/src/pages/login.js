import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { loginUser } from '../actions/user_actions';
import {Form , FormGroup , FormControl , Button,FormLabel} from 'react-bootstrap';

class login extends Component {

    state = {
        email:"",
        password:"",
        errors:[],
    }       

    displayErrors = errors => errors.map((err,i)=><p key={i}>{err}</p>);

    handleChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    
    submitForm = event => {
        event.preventDefault();

        let dataToSubmit = {
            email :this.state.email,
            password :this.state.password
        }

        if(this.isFormvalid(this.state)){
            this.setState({errors:[]})
                this.props.dispatch(loginUser(dataToSubmit))
                .then((response)=>{
                    if(response.payload.loginSuccess){
                        console.log(response);
                        this.props.history.push('/')

                    }else{
                        this.setState({errors:this.state.errors.concat(
                            "Failed to log in ,you can check your Email and Password"
                        )
                        })
                    }
                })
        }else{
            this.setState({
                error:this.state.errors.concat('Form is not valid')
            })
        }
    }


    isFormvalid = ({email,password}) => email && password;

    render() {
        return (    
            <Form className="m-5">
                <h1>Login Page</h1>
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl required type="email" name="email"  id="email" value={this.state.email} onChange={e=>this.handleChange(e)} placeholder="Enter your email:"/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl required type="password" name="password"  id="password" value={this.state.password} onChange={e=>this.handleChange(e)} placeholder="Enter your password:"/>
                </FormGroup>
                <Button type="submit" onClick={this.submitForm}>
                    Submit
                </Button>
                &nbsp;&nbsp;
                <Link to='/register'><button type="button" class="btn btn-outline-success">SIGN UP</button></Link>
                
                {this.state.errors.length>0 && this.displayErrors(this.state.errors)}
            </Form>
        );
    }
}
function mapStateToProps(state){
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(login);