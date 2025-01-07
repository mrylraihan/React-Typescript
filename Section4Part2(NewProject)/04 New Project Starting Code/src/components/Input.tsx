import React from 'react'



function Input(props:{type:string}) {
    console.log(props)
	return (
		<p>
			<label>Type:{props.type}</label>
			<input type='text'/>
		</p>
	)
}

export default Input
