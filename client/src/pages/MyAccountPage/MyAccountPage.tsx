import { FC } from 'react'
import { Outlet, useOutlet } from 'react-router-dom'

import Sidebar from '@/components/Layout/Sidebar/Sidebar'

const MyAccountPage: FC = () => {
	const outlet = useOutlet()

	return (
		<div>
			<Sidebar />
			<main>{!outlet ? 'Account' : <Outlet />}</main>
		</div>
	)
}

export default MyAccountPage
