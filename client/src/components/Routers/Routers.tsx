import { useAppSelector } from '@/hooks/use-redux'
import { checkIsAuth } from '@/store/features/user/userSlice'
import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { publicRoutes, privateRoutes } from './routes'

const Routers: FC = () => {
	const isAuth = useAppSelector(checkIsAuth)

	return (
		<Routes>
			{publicRoutes.map(({ path, element }, index) => (
				<Route path={path} element={element} key={index} />
			))}
			{isAuth &&
				privateRoutes.map(({ path, element }, index) => (
					<Route path={path} element={element} key={index} />
				))}
		</Routes>
	)
}

export default Routers
