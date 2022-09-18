import { FC } from 'react'
import { useRoutes } from 'react-router-dom'

import BusesPage from '@/pages/BusesPage/BusesPage'
import HomePage from '@/pages/HomePage/HomePage'
import MyAccountPage from '@/pages/MyAccountPage/MyAccountPage'
import AgenciesPage from '@/pages/AgenciesPage/AgenciesPage'
import AboutUsPage from '@/pages/AboutUsPage/AboutUsPage'
import PrivateRouter from '../PrivateRoute/PrivateRoute'
import Agencies from '../AccountSubpage/Agencies/Agencies'
import Buses from '../AccountSubpage/Buses/Buses'
import Orders from '../AccountSubpage/Orders/Orders'

const Routers: FC = () => {
	const routes = useRoutes([
		//PublicRoutes
		{
			path: '/',
			element: <HomePage />,
		},
		{
			path: 'buses',
			element: <BusesPage />,
		},
		{
			path: 'agencies',
			element: <AgenciesPage />,
		},
		{
			path: 'about',
			element: <AboutUsPage />,
		},
		//PrivateRoutes

		{
			path: 'account',
			element: (
				<PrivateRouter>
					<MyAccountPage />
				</PrivateRouter>
			),
			children: [
				{
					path: 'agencies',
					element: <Agencies />,
				},
				{
					path: 'buses',
					element: <Buses />,
				},
				{
					path: 'orders',
					element: <Orders />,
				},
			],
		},
	])

	return routes
}

export default Routers
