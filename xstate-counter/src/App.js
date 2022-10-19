import { useMachine } from '@xstate/react';
import counterMachine from './machines/counterMachine.js';
import './App.css';

function App() {
	const [state, send] = useMachine(counterMachine);

	return (
		<>
			<section>
				<h1>Counter</h1>
				<output>{state.context.count}</output>
				<button onClick={() => send('INCREMENT')}>Increment</button>
				<button onClick={() => send('DECREMENT')}>Decrement</button>
			</section>
		</>
	);
}

export default App;
