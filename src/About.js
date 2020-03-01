import React  from 'react';
import Team from './Team';
import Form from './Form'; 

const About = (props) => {

	 const myteamarray= [
	 	{
	 		id:1,
	 		name:'Karan',
	 		work:'Web Developer'
	 	},
	 	{
	 		id:2,
			name:'Karandeep',
			work:'UI Developer'
		},
		{
	 		id:3,
	 		name:'Banty',
	 		work:'UI Designer'
	 	},
	 	{
	 		id:4,
	 		name:'Monu',
	 		work:'UI Designer'
	 	},
	 	{
	 		id:5,
	 		name:'Ram',
	 		work:'Testing'
	 	},
	 	{
	 		id:6,
	 		name:'Raman',
	 		work:'SEO'
	 	},
	 	{
	 		id:7,
	 		name:'Pavi',
	 		work:'Baby Care'
	 	}


	 ]

	 const myteam = myteamarray.map((avatarcard, i) => {
	 	return 	<Team id={myteamarray[i].name}  
					   name={myteamarray[i].name} 
	 				   work={myteamarray[i].work} />
				
	})

		return(
			<div style={{textAlign:"center"}}>
				<h1>Our Team Members</h1> 
					{myteam}
			</div>
		)
	}
 
export default About;