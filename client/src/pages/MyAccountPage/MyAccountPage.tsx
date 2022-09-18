import { FC } from 'react'
import { Outlet, useOutlet } from 'react-router-dom'

import styles from './MyAccountPage.module.scss'
import Sidebar from '@/components/Layout/Sidebar/Sidebar'

const MyAccountPage: FC = () => {
	const outlet = useOutlet()

	return (
		<>
			<section style={{ height: '100%' }}>
				<div className='container'>
					<div className={styles.inner}>
						<Sidebar />
						<main>{!outlet ? 'Account' : <Outlet />}</main>
					</div>
				</div>
			</section>
			<section>div</section>
		</>
	)
}

export default MyAccountPage
