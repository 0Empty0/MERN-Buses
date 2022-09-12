import { Fragment, FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import styles from './HeaderButton.module.scss'

const HeaderButton: FC<PropsWithChildren<{ isAuth: boolean }>> = ({
	isAuth,
}) => {
	return (
		<Fragment>
			{isAuth ? (
				<div className={`${styles.dropdown__wrapper} button`}>
					<span>My Account</span>
					<div className={`${styles.dropdown} paragraph-medium-body`}>
						<Link to='/account'>My Account</Link>
						<button>Log Out</button>
					</div>
				</div>
			) : (
				<button className='button'>Login</button>
			)}
		</Fragment>
	)
}

export default HeaderButton
