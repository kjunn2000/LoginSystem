import React, { Component } from 'react';
import {Form , FormGroup , FormControl , Button,FormLabel} from 'react-bootstrap';
import {registerUser} from '../actions/user_actions';
import {connect} from 'react-redux';

class Register extends Component {

    state = {
        lastname:"",
        name : "",
        email:"",
        password:"",
        passwordConfirmation:"",
        errors:[],
    }      

    displayErrors = errors => errors.map((err,i)=><p key={i}>{err}</p>);

    handleChange = event =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    isFormValid = () =>{
        let errors = [];
        let error ;

        if (this.isFormEmpty(this.state)){
            error = {message:"Fill in all fields"};
            this.setState({errors:errors.concat(error)});
        }else if(!this.isPasswordValid(this.state)){
            error = { message:"Password is invalid"};
            this.setState({errors:errors.concat(error)});
        }else{
            return true;
        }
    }

    isPasswordValid = ({password,passwordConformation})=>{
        if(password.length<6 || passwordConformation.length < 6) {
            return false;
        }else if (password !== passwordConformation){
            return false;
        }else {
            return true;
        }
    }



    isFormEmpty = ({lastname,name,email,password,passwordConfirmation}) => {
        return (
            !name.length ||
            !lastname.length ||
            !email.length ||
            !password.length||
            !passwordConfirmation.length
        );
    }

    submitForm = event =>{
        event.preventDefault();

        let dataToSubmit = {
            email:this.state.email,
            name:this.state.name,
            lastname : this.state.lastname,
            password : this.state.password,
            passwordConfirmation : this.state.passwordConfirmation,
        }

        if(this.isFormValid){
            this.setState({errors:[]});
            this.props.dispatch(registerUser(dataToSubmit))
                .then(response=>{
                    if(response.payload.success){
                        this.props.history.push('/login')
                    }else{
                        this.setState({
                            errors:this.state.errors.concat("Your attempt to send data to DB was failed")
                        })
                    }
                })
                .catch(err=>{
                    this.setState({
                        errors:this.state.errors.concat(err)
                    });
                })
        }else{
            console.error("Form is not valid");
        }
    }

    

    render() {
        return (
            <Form className="m-5">
            <h1>SIGN UP</h1>
            <FormGroup>
                <FormLabel>Lastname</FormLabel>
                <FormControl required type="text" name="lastname"  id="lastname" value={this.state.lastname} onChange={e=>this.handleChange(e)} placeholder="Enter your lastname:"/>
            </FormGroup>
            <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormControl required type="text" name="name"  id="name" value={this.state.name} onChange={e=>this.handleChange(e)} placeholder="Enter your name:"/>
            </FormGroup>
            <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormControl required type="email" name="email"  id="email" value={this.state.email} onChange={e=>this.handleChange(e)} placeholder="Enter your email:"/>
            </FormGroup>
            <FormGroup>
                <FormLabel>Password</FormLabel>
                <FormControl required type="password" name="password"  id="password" value={this.state.password} onChange={e=>this.handleChange(e)} placeholder="Enter your password:"/>
            </FormGroup>
            <FormGroup>
                <FormLabel>Password Conformation</FormLabel>
                <FormControl required type="password" name="passwordConfirmation"  id="passwordConfirmation" value={this.state.passwordConfirmation} onChange={e=>this.handleChange(e)} placeholder="Enter your password again:"/>
            </FormGroup>
            <Button type="submit" onClick={this.submitForm}>
                Create Account
            </Button>
            &nbsp;&nbsp;
            
            {this.state.errors.length>0 && this.displayErrors(this.state.errors)}
        </Form>
        );
    }
}

export default connect()(Register);