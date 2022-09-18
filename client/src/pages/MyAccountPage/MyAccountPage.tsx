import { FC } from 'react'
import { Outlet, useOutlet } from 'react-router-dom'

import styles from './MyAccountPage.module.scss'
import Sidebar from '@/components/Layout/Sidebar/Sidebar'

const MyAccountPage: FC = () => {
	const outlet = useOutlet()

	return (
		<div className='container'>
			<div className={styles.inner}>
				<Sidebar />
				<main>{!outlet ? 'Account' : <Outlet />}</main>
			</div>
		</div>
	)
}

export default MyAccountPage
