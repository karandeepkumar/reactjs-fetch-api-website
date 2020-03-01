import React, { Component } from 'react';
import Styles from './sass/Form.scss';

class Form extends React.Component{
	constructor(props){
		super(props);
			this.state={
						fullname:"",
						email:"",
						password:"",
						message:"" 
						}
					}
		handlechangeall=(event)=>{
			this.setState({[event.target.name]:event.target.value})
				}

		handlesubmit=(event)=>{

				if(this.state.fullname=="" || this.state.fullname.length<3){
					alert("Name must be atleast 3 chars")
					event.preventDefault();
						
				}
				else if(this.state.email==""){

					alert("Please Fill email")
					event.preventDefault();
					
				}
				else if(this.state.password=="" || this.state.password.length<5){
					alert("Password must be atleast 5 chars")
					event.preventDefault();

				}
				else if(this.state.message==""){
					alert("Please Write Any Message")
					event.preventDefault();
				}

				else{
					alert("Form Submitted");
				}

			}	
		render(){
			return(
				<div>
					<div className="formDiv">
						<form onSubmit={this.handlesubmit}>
							<label>Full Name:</label><br/>
							<input type="text" name="fullname" value={this.state.fullname}
									onChange={this.handlechangeall} />	<br/>

							<label>Email Id:</label><br/>
							<input type="email" name="email" value={this.state.email} 
									onChange={this.handlechangeall} />	<br/>

							<label>Password:</label><br/>
							<input type="text" name="password" value={this.state.password}
							 		onChange={this.handlechangeall} /> <br/>
							<label>Message:</label><br/>

							<textarea name="message" value={this.state.message} 
									  onChange={this.handlechangeall} /> <br/>
							<input type="submit" value="Submit"/>
						</form>
					</div>	
				</div>
				)
			}
		}

export default Form;			