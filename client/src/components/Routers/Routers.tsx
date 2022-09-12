import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { publicRoutes, privateRoutes } from './routes'
import { checkIsAuth } from '@/store/features/user/userSlice'
import { useAppSelector } from '@/hooks/use-redux'

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
