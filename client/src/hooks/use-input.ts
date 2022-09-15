import { ChangeEvent, useReducer } from 'react'

interface inputState {
	value: string
	isTouched: boolean
}
interface inputAction {
	type: 'INPUT' | 'BLUR' | 'RESET'
	value?: string
}

const initialInputState: inputState = {
	value: '',
	isTouched: false,
}

const inputStateReducer = (
	state: inputState,
	action: inputAction
): inputState => {
	switch (action.type) {
		case 'INPUT':
			return { value: action.value!, isTouched: state.isTouched }
		case 'BLUR':
			return { isTouched: true, value: state.value }
		case 'RESET':
			return { value: '', isTouched: false }
		default:
			return state
	}
}

const useInput = (
	validateValue: (value: string) => boolean
): {
	value: string
	isValid: boolean
	hasError: boolean
	valueChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
	inputBlurHandler: () => void
	reset: () => void
} => {
	const [inputState, dispatch] = useReducer(
		inputStateReducer,
		initialInputState
	)

	const valueIsValid = validateValue(inputState.value)
	const hasError = !valueIsValid && inputState.isTouched

	const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		dispatch({ type: 'INPUT', value: event.target.value })
	}

	const inputBlurHandler = (): void => {
		dispatch({ type: 'BLUR' })
	}

	const reset = () => {
		dispatch({ type: 'RESET' })
	}

	return {
		value: inputState.value,
		isValid: valueIsValid,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	}
}

export default useInput
