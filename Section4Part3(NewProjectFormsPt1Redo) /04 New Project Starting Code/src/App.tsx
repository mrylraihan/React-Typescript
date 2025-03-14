import { FormEvent, useRef } from "react"
import Input from "./components/Input"
import Form from "./components/Form"
import Button from "./components/Button"

function App() {
	const ageRef = useRef<HTMLInputElement>(null)
	const nameRef = useRef<HTMLInputElement>(null)

	const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(nameRef.current!.value)
		console.log(ageRef.current!.value)
		nameRef.current!.value = ''
		ageRef.current!.value = ''
	}

	return (
		<>
			<main>
				<Form onSubmit={onSubmitHandler}>
					<Input label='name' id='name' ref={nameRef} />
					<Input label='age' id='age' type='number' ref={ageRef}/>
					<Button type="submit">Click me</Button>
				</Form>
			</main>
		</>
	)
}

export default App
