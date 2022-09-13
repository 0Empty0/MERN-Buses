import { Fragment, FC, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '@/assets/images/Logo.svg'
import styles from './Header.module.scss'
import { publicRoutes, privateRoutes } from '@/components/Routers/routes'
import { useAppSelector } from '@/hooks/use-redux'
import { checkIsAuth } from '@/store/features/user/userSlice'
import HeaderButton from './HeaderButton/HeaderButton'
import Authentication from '@/components/Authentication/Authentication'

const Header: FC = () => {
	const isAuth = useAppSelector(checkIsAuth)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModalHandler = (): void => {
		setIsModalOpen(prevState => !prevState)
	}
	const closeModalHandler = (): void => {
		setIsModalOpen(false)
	}

	return (
		<Fragment>
			<Authentication isOpen={isModalOpen} closeHandler={closeModalHandler} />

			<header className='header'>
				<div className='container'>
					<div className={styles.header}>
						<Link to='/'>
							<img src={logo} alt='Logo' />
						</Link>
						<ul>
							{publicRoutes
								.filter(route => route.title)
								.map(({ path, title }, index) => (
									<li className={styles.item} key={index}>
										<NavLink
											to={path}
											className={({ isActive }) =>
												`paragraph-regular-body ${styles.link} ${
													isActive ? styles.active : ''
												}`
											}
										>
											{title}
										</NavLink>
									</li>
								))}
							{isAuth &&
								privateRoutes
									.filter(route => route.title)
									.map(({ path, title }, index) => (
										<li className={styles.item} key={index}>
											<NavLink
												to={path}
												className={({ isActive }) =>
													`paragraph-regular-body ${styles.link} ${
														isActive ? styles.active : ''
													}`
												}
											>
												{title}
											</NavLink>
										</li>
									))}
						</ul>
						<HeaderButton isAuth={isAuth} openModal={openModalHandler} />
					</div>
				</div>
			</header>
		</Fragment>
	)
}

export default Header
