import React from 'react';
import logo from './logo.png';


const Posts = (props) => {

	return (
		<div>
			<img src={logo} alt="logo" />	
			<div style={{marginLeft:"210px", marginTop:"-200px" }}>		
				<h1>{props.title}</h1> <br/> 
				<p>{props.description}</p><code><b>Read More...</b></code>
				<hr/><br/>
			</div>
		</div>
	)

}

export default Posts;	 