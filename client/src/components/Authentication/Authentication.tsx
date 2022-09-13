import { FC, PropsWithChildren, Fragment, useState, useEffect } from 'react'
import { Transition } from 'react-transition-group'

import styles from './Authentication.module.scss'
import Modal from '../Layout/Modal/Modal'
import Input from '../UI/Input/Input'
import useInput from '@/hooks/use-input'
import { useAppDispatch, useAppSelector } from '@/hooks/use-redux'

const Authentication: FC<
	PropsWithChildren<{ isOpen: boolean; closeHandler: () => void }>
> = ({ isOpen, closeHandler }) => {
	const {
		value: username,
		isValid: usernameIsValid,
		hasError: isUsernameHasError,
		valueChangeHandler: usernameChangeHandler,
		inputBlurHandler: usernameBlurHandler,
		reset: resetUsername,
	} = useInput(value => value.trim() !== '')

	const {
		value: password,
		isValid: passwordIsValid,
		hasError: isPasswordHasError,
		valueChangeHandler: passwordChangeHandler,
		inputBlurHandler: passwordBlurHandler,
		reset: resetPassword,
	} = useInput(value =>
		/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?!.*\s).{8,}$/gm.test(value)
	)

	const [isLogging, setIsLogging] = useState(true)

	const dispatch = useAppDispatch()
	const { isLoading } = useAppSelector(state => state.user)

	const changeHandler = (): void => {
		setIsLogging(prevState => !prevState)
	}

	const resetForm = (): void => {
		resetUsername()
		resetPassword()
	}

	let formIsValid = false
	if (usernameIsValid && passwordIsValid) formIsValid = true

	return (
		<Modal>
			<Transition
				in={isOpen}
				timeout={{ enter: 0, exit: 200 }}
				appear
				unmountOnExit
			>
				{state => (
					<section
						style={{ opacity: state === 'entered' ? 1 : 0 }}
						className={styles.wrapper}
					>
						<div onClick={closeHandler} className={styles.bg} />
						<div
							className={styles.inner}
							style={{
								transform:
									state === 'entered'
										? 'translateX(-50%) translateY(-50%)'
										: 'translateX(-50%) translateY(-60%)',
							}}
						>
							{isLogging ? (
								<Fragment>
									<h1 className={`${styles.title} heading-bold-h2`}>Login</h1>
									<form>
										<Input
											label='Username'
											type='text'
											onChange={usernameChangeHandler}
											onBlur={usernameBlurHandler}
											value={username}
											hasError={isUsernameHasError}
											errorLabel='This field cannot be empty'
										/>
										<Input
											label='Password'
											type='password'
											onChange={passwordChangeHandler}
											onBlur={passwordBlurHandler}
											value={password}
											hasError={isPasswordHasError}
											errorLabel='Password must have at least one upper and lower case letter and number'
										/>
										<p
											onClick={changeHandler}
											className={`${styles.text} paragraph-regular-body`}
										>
											Don't have an account?
										</p>
										<button
											className={`${styles.button} button`}
											disabled={!formIsValid}
										>
											Login
										</button>
									</form>
								</Fragment>
							) : (
								<Fragment>
									<h1 className={`${styles.title} heading-bold-h2`}>
										Register
									</h1>
									<form>
										<Input
											label='Username'
											type='text'
											onChange={usernameChangeHandler}
											onBlur={usernameBlurHandler}
											value={username}
											hasError={isUsernameHasError}
											errorLabel='This field cannot be empty'
										/>
										<Input
											label='Password'
											type='password'
											onChange={passwordChangeHandler}
											onBlur={passwordBlurHandler}
											value={password}
											hasError={isPasswordHasError}
											errorLabel='Password must have at least one upper and lower case letter and number'
										/>
										<p
											onClick={changeHandler}
											className={`${styles.text} paragraph-regular-body`}
										>
											Already have an account?
										</p>
										<button
											className={`${styles.button} button`}
											disabled={!formIsValid}
										>
											Register
										</button>
									</form>
								</Fragment>
							)}
						</div>
					</section>
				)}
			</Transition>
		</Modal>
	)
}

export default Authentication
