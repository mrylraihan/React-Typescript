import React, { forwardRef, type ComponentPropsWithoutRef } from 'react'

type InputProps = {
	label: string
	id: string
} & ComponentPropsWithoutRef<'input'>

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ id, label, ...props },
	ref
) {
	 
	return (
		<p>
			<label htmlFor={id}>Type: {label}</label>
			<input id={id} {...props} ref={ref} />
		</p>
	)
})

export default Input
