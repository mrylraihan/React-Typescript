import React from 'react'
import Button from './components/Button';
import Container from './components/Container';
import Container2 from './components/Container2';


function App() {
const ClickMe = ()=>console.log("I was Clicked!")
  return (
		<>
			<main>
				<Container as={Button} onClick={ClickMe} />
			</main>
			<main>
				<Container as={Button} onClick={ClickMe}>
					Click me
				</Container>
			</main>
			<main>
				<Container2 as='p' style={{color:'red'}}>this is a p-tag</Container2>
			</main>
			<main>
				<Container2 as='button' onClick={ClickMe}>this is a button</Container2>

			</main>
		</>
	)
}

export default App
