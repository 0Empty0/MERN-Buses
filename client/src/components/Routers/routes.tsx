import BusesPage from '@/pages/BusesPage/BusesPage'
import HomePage from '@/pages/HomePage/HomePage'
import MyAccountPage from '@/pages/MyAccountPage/MyAccountPage'
import AgenciesPage from '@/pages/AgenciesPage/AgenciesPage'
import AboutUsPage from '@/pages/AboutUsPage/AboutUsPage'

interface IRoutes {
	title?: string
	path: string
	element: React.ReactNode
}

export const privateRoutes: IRoutes[] = [
	{
		path: '/account',
		element: <MyAccountPage />,
	},
]
export const publicRoutes: IRoutes[] = [
	{
		title: 'Home',
		path: '/',
		element: <HomePage />,
	},
	{
		title: 'Buses',
		path: '/buses',
		element: <BusesPage />,
	},
	{
		title: 'Agencies',
		path: '/agencies',
		element: <AgenciesPage />,
	},
	{
		title: 'About us',
		path: '/about',
		element: <AboutUsPage />,
	},
]
