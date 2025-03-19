import React, { ComponentPropsWithoutRef } from 'react'
type FormTypeData = ComponentPropsWithoutRef<'form'>

function Form2( {children, ...props}: FormTypeData) {
  return (
    <form {...props}>
      {children}
    </form>
  )
}

export default Form2
