import { FC } from 'react'
import { Outlet, useOutlet } from 'react-router-dom'

import styles from './MyAccountPage.module.scss'
import Sidebar from '@/components/Layout/Sidebar/Sidebar'

const MyAccountPage: FC = () => {
	const outlet = useOutlet()

	return (
		<section>
			<div className='container'>
				<div className={styles.inner}>
					<Sidebar />
					<main style={{ height: '100%' }}>
						{!outlet ? 'text' : <Outlet />}
					</main>
				</div>
			</div>
		</section>
	)
}

export default MyAccountPage
