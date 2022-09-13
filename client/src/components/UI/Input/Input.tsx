import { FC, PropsWithChildren, ChangeEvent, useId } from 'react'

import inputType from './inputType'

const Input: FC<
	PropsWithChildren<{
		label: string
		type: inputType
		onChange?: (event: ChangeEvent<HTMLInputElement>) => void
		onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
		value?: string
		hasError?: boolean
		errorLabel?: string
	}>
> = ({
	type,
	label,
	onChange,
	onBlur,
	value,
	hasError = false,
	errorLabel,
}) => {
	const id = useId()

	return (
		<div className='input__wrapper'>
			<label htmlFor={id} className='label'>
				{label}
			</label>
			<input
				type={type}
				id={id}
				className={`input${hasError ? ' input__invalid' : ''}`}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				placeholder={label}
			/>
			{hasError && <p className='input__error'>{errorLabel}</p>}
		</div>
	)
}

export default Input
