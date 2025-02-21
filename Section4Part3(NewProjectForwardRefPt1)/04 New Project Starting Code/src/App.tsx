
import RefPractice from './components/RefPractice'
import Input from './components/Input';
import { useRef } from 'react';
function App() {
	const inputRef = useRef<HTMLInputElement>(null)
	const printInput = ()=>{
		console.log(inputRef.current!.value)
	}
	return (
		<>
			<main>
				<Input label='Test' id='test' ref={inputRef} printInput={printInput} />
			</main>
			<main>
				<RefPractice />
			</main>
		</>
	)
}

export default App
