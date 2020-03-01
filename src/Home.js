import React, { Component } from 'react';
import logo from './logo.png';
import Posts from './Posts';


const Home = (props)=> {
	
	const postarray = [
	 	{
	 		id:1,
	 		title:"React is World Wide Famous",
	 		description:"heheheh ehhehe hehheh roident tempor dolore eu laboris tempor dolore culpa magna fugiat sunt est magna eu laborum amet ut commodo quis et consequat magna incididunt est dolor aliqua eiusmod cupidatat consectetur adipisicing magna laboris occaecat labore tempor proident sit nisi tempor nulla ut ex ullamco proident sit pariatur ex fugiat ut anim qui irure eiusmod do aliqua sit irure dolore ea pariatur ut eiusmod fugiat elit dolore dolor ea veniam esse in duis eu aliqua in in reprehenderit mollit irure commodo dolore ullamco labore qui in commodo commodo exercitation esse in deserunt exercitation dolor adipisicing excepteur veniam qui sed ut laborum sint dolore enim esse amet eiusmod dolor in dolore voluptate laboris do deserunt duis cillum amet.int id magna voluptate deserunt"
	 	},
	 	{
	 		id:2,
			title:"React is Best JavaScript Library",
	 		description:"heheheh ehhehe hehheh roident tempor dolore eu laboris tempor dolore culpa magna fugiat sunt est magna eu laborum amet ut commodo quis et consequat magna incididunt est dolor aliqua eiusmod cupidatat consectetur adipisicing magna laboris occaecat labore tempor proident sit nisi tempor nulla ut ex ullamco proident sit pariatur ex fugiat ut anim qui irure eiusmod do aliqua sit irure dolore ea pariatur ut eiusmod fugiat elit dolore dolor ea veniam esse in duis eu aliqua in in reprehenderit mollit irure commodo dolore ullamco labore qui in commodo commodo exercitation esse in deserunt exercitation dolor adipisicing excepteur veniam qui sed ut laborum sint dolore enim esse amet eiusmod dolor in dolore voluptate laboris do deserunt duis cillum amet.int id magna voluptate deserunt"

		},
		{
	 		id:3,
	 		title:"React Helps to Create an Awesome UI",
	 		description:"heheheh ehhehe hehheh roident tempor dolore eu laboris tempor dolore culpa magna fugiat sunt est magna eu laborum amet ut commodo quis et consequat magna incididunt est dolor aliqua eiusmod cupidatat consectetur adipisicing magna laboris occaecat labore tempor proident sit nisi tempor nulla ut ex ullamco proident sit pariatur ex fugiat ut anim qui irure eiusmod do aliqua sit irure dolore ea pariatur ut eiusmod fugiat elit dolore dolor ea veniam esse in duis eu aliqua in in reprehenderit mollit irure commodo dolore ullamco labore qui in commodo commodo exercitation esse in deserunt exercitation dolor adipisicing excepteur veniam qui sed ut laborum sint dolore enim esse amet eiusmod dolor in dolore voluptate laboris do deserunt duis cillum amet.int id magna voluptate deserunt"

	 	},
	 	{
	 		id:4,
	 		title:"React is World Wide Famous",
	 		description:"heheheh ehhehe hehheh roident tempor dolore eu laboris tempor dolore culpa magna fugiat sunt est magna eu laborum amet ut commodo quis et consequat magna incididunt est dolor aliqua eiusmod cupidatat consectetur adipisicing magna laboris occaecat labore tempor proident sit nisi tempor nulla ut ex ullamco proident sit pariatur ex fugiat ut anim qui irure eiusmod do aliqua sit irure dolore ea pariatur ut eiusmod fugiat elit dolore dolor ea veniam esse in duis eu aliqua in in reprehenderit mollit irure commodo dolore ullamco labore qui in commodo commodo exercitation esse in deserunt exercitation dolor adipisicing excepteur veniam qui sed ut laborum sint dolore enim esse amet eiusmod dolor in dolore voluptate laboris do deserunt duis cillum amet.int id magna voluptate deserunt"
		}
	]

	const mypost = postarray.map((avatarcard, i) => {
	 	return 	<Posts id={postarray[i].title}  
					   title={postarray[i].title} 
	 				   description={postarray[i].description} />
				
	})
			return (
				<div>
					{mypost}
				</div>
					)
				 
			}
 

export default Home;

