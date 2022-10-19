import { useMachine } from '@xstate/react';
import temperatureMachine from './machines/temperatureMachine.js';

import './App.css';

function App() {
	const [state, send] = useMachine(temperatureMachine);
	const { C, F } = state.context;

	return (
		<section>
			<label>
				<input
					type='number'
					id='celsius'
					value={C ?? ''}
					onChange={(e) => {
						send('CELSIUS', { value: e.target.value });
					}}
					placeholder='e.g., 0'
				/>
				<span>˚C</span>
			</label>
			<div>=</div>
			<label>
				<input
					type='number'
					id='fahrenheit'
					value={F ?? ''}
					onChange={(e) => {
						send('FAHRENHEIT', { value: e.target.value });
					}}
					placeholder='e.g., 32'
				/>
				<span>˚F</span>
			</label>
		</section>
	);
}

export default App;
