import { sidebarRoutes } from '@/components/Routers/routes'
import { FC, PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Sidebar.module.scss'

const Sidebar: FC<PropsWithChildren<unknown>> = props => {
	return (
		<aside>
			<ul>
				{sidebarRoutes.map(({ title, path }, index) => (
					<li key={index}>
						<NavLink to={path}>{title}</NavLink>
					</li>
				))}
			</ul>
		</aside>
	)
}

export default Sidebar
