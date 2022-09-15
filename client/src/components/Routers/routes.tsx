export interface IRoutes {
	title?: string
	path: string
}

export const privateRoutes: IRoutes[] = [
	{
		path: '/account',
	},
]
export const publicRoutes: IRoutes[] = [
	{
		title: 'Home',
		path: '/',
	},
	{
		title: 'Buses',
		path: '/buses',
	},
	{
		title: 'Agencies',
		path: '/agencies',
	},
	{
		title: 'About us',
		path: '/about',
	},
]

export const sidebarRoutes: IRoutes[] = [
	{
		title: 'Dashboard',
		path: '/account',
	},
	{
		title: 'Agencies',
		path: 'agencies',
	},
	{
		title: 'Buses',
		path: 'buses',
	},
	{
		title: 'Orders',
		path: 'orders',
	},
]
