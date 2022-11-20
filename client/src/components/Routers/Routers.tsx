import { FC, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'

import { IRoutes, privateRoutes, publicRoutes } from './routes'
import { useAppSelector } from '@/hooks/use-redux'

// const Routers: FC = () => {
// 	const routes = useRoutes([
// 		//PublicRoutes
// 		{
// 			index: true,
// 			element: <HomePage />,
// 		},
// 		{
// 			path: 'buses',
// 			element: <BusesPage />,
// 		},
// 		{
// 			path: 'agencies',
// 			element: <AgenciesPage />,
// 		},
// 		{
// 			path: 'about',
// 			element: <AboutUsPage />,
// 		},
// 		//PrivateRoutes

// 		{
// 			path: 'account',
// 			element: (
// 				<PrivateRouter>
// 					<MyAccountPage />
// 				</PrivateRouter>
// 			),
// 			children: [
// 				{
// 					path: 'agencies',
// 					element: <Agencies />,
// 				},
// 				{
// 					path: 'buses',
// 					element: <Buses />,
// 				},
// 				{
// 					path: 'orders',
// 					element: <Orders />,
// 				},
// 			],
// 		},
// 	])

// 	return routes
// }

const Routers: FC = () => {
  const { user: isAuth } = useAppSelector((state) => state.user)

  const routesGenerator = (routes: IRoutes[]) => {
    return routes.map(({ path, element, children }, index) =>
      children ? (
        <Route key={index} path={path} element={element}>
          {routesGenerator(children)}
        </Route>
      ) : (
        <Route key={index} path={path} element={element} />
      )
    )
  }

  return (
    <Routes>
      {routesGenerator(publicRoutes)}
      {isAuth ? routesGenerator(privateRoutes) : <Fragment />}
    </Routes>
  )
}

export default Routers
