import React from 'react';

const card=({name, email, id})=>{
	return(
		//<h1>RoboFriends</h1>
		<div  className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?size=150x150`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>)
}

export default card;