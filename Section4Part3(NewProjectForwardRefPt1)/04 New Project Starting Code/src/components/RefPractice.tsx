import React, { useRef } from 'react'

function RefPractice() {
    const testRef = useRef<HTMLInputElement>(null)
    const printValue = ()=> console.log(testRef.current!.value)
    const printCurrent = ()=> console.log(testRef.current)
  return (
    <div>
        <input type="text" ref={testRef}/>
      <button onClick={printCurrent}>Check Ref</button>
      <button onClick={printValue}>Check Ref Value</button>
    </div>
  )
}

export default RefPractice
