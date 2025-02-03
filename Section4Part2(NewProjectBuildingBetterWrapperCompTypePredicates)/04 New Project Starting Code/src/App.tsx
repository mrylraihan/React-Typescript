import React from 'react'
import Button from './components/Button';


function App() {

  return (
		<>
			<main>
				<p>
				<Button onClick={() => console.log('hello')}>
					A Button
				</Button>
				</p>
				<p>
				<Button href='https://nike.com'>
					A Link
				</Button>
				</p>
			</main>
		</>
	)
}

export default App
