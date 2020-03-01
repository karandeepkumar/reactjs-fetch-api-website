import React from 'react';
import About from './About';

const Team = (props) => {

	return (
		<div style={{display:"inline-block"}}>
			<img src={`https://joeschmoe.io/api/v1/${props.name}`} width="300px" alt="avatar" /><br/>			
				<h1>{props.name}</h1> 
				<p>{props.work}</p>
		</div>
	)

}

export default Team;	 