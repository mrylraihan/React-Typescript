import React from 'react'

type InputProps = {
	type:string,
	label:string,
	id:string,
	

}

function Input(props:InputProps) {
    console.log(props)
	return (
		<p>
			<label htmlFor={props.id}>Type: {props.label}</label>
			<input id={props.id} type={props.type}/>
		</p>
	)
}

export default Input
