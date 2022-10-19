import { createMachine, interpret } from 'xstate';

const machine =
	/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgHd1cAXAqAYgA9Yr0qwT0AzNgJ2QCYADMKJ00WPIVIVqtANqCAuolAAHAPaxZ6-CpANEAFgBshksf5DBATmsB2AIwXhxgDQgAnomuCSD-9YOliaCDoIAzAAcAL7R7uI4BMQcADZgPGwQjMys7Fy8AsKCogmSyehpGZAKykggGlo0OnoGCCZmFla2js6Cbp6IALQO4SSR4zaGhpHhsyZBsfEYiVIkqug8FWkp2SxsHNzphSJiy2Wk65sp2zV6Ddq6da0ArM-W5vwO1s-8pg6Rgjs7i8CEG4V81gm30M4RM3zsxmesTiIHw6ggcD0pSS0koNHwUDumgeLUQ4Weo2ekUMz0Ehl+gn4kOswO8vmMASC-BCYSiixA2NWFXSmSJjVwzSeiGM1mMJCE3344zshkhgkirNB4X4JCiAOssMiiNpI35guSly2YBSYpJUoQTLMhkckKNfTsPmM-RBwwR8s+zq+HIcdgVZrOOJIYHwEFtTUeoFajpIgddxndnu9iCVOuDgWC6bCMPDEhxcYlCf02ZMKZd43Txg9fSzoN+z39DhMMud4QRneR0SAA */
	createMachine({
		id: 'machine',
		initial: 'waiting',
		states: {
			waiting: {
				after: {
					2000: {
						target: 'alerted',
						actions: [],
						internal: false,
					},
				},
			},
			alerted: {
				entry: () => {
					console.log(currentState);
				},
				after: {
					2000: {
						target: 'parallel',
						actions: [],
						internal: false,
					},
				},
			},
			parallel: {
				entry: () => {
					console.log(currentState);
				},
				after: {
					2000: {
						target: 'end',
						actions: [],
						internal: false,
					},
				},
			},
			end: {
				entry: () => {
					interpret(machine2).start();
				},
				actions: [],
				internal: false,
			},
		},
	});

const machine2 =
	/** @xstate-layout N4IgpgJg5mDOIC5QFsCGBjAFgSwHZgCYA6Ad1WwBc8oBiAD1gtQrCNQDMWAnACgIAZBAShposeQqXJVcUANr8AuolAAHAPaxK2dbhUg6iAIwAWABxF+AZgDsJgJwEzAVmcnrJqwBoQAT0RmVpaC1gBsoQQE9qFG9kYAvok+uOoQcPpiOPjEZNqy+hpaVLr6hggmBD7+CIFEDvYN7mY2Rq32SSCZEsTo6siqADZgLBAFmtolSAaIBDYWEfUEnjY2zjbefgFBIfymMWZGVuYdXdljRTp6U2UAtKFViHeJiUA */
	createMachine({
		id: 'machine2',
		initial: 'waiting',
		states: {
			waiting: {
				after: {
					100: {
						target: '#machine2.completed',
						actions: [],
						internal: false,
					},
				},
			},
			completed: {
				entry: () => console.log(currentState),
				type: 'final',
			},
		},
	});

let currentState;

interpret(machine)
	.start()
	.onTransition((state) => {
		currentState = state.value;
	});
