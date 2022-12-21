import React from 'react'

import BusesPage from '@/pages/BusesPage/BusesPage'
import HomePage from '@/pages/HomePage/HomePage'
import MyAccountPage from '@/pages/MyAccountPage/MyAccountPage'
import AgenciesPage from '@/pages/AgenciesPage/AgenciesPage'
import AboutUsPage from '@/pages/AboutUsPage/AboutUsPage'
import Agencies from '../AccountSubpage/Agencies/Agencies'
import Buses from '../AccountSubpage/Buses/Buses'
import Orders from '../AccountSubpage/Orders/Orders'
import Page404 from '@/pages/Page404/Page404'

export interface IRoutes {
  title?: string
  path: string
  element: React.ReactNode
  children?: IRoutes[]
}

export const privateRoutes: IRoutes[] = [
  {
    path: '/account',
    element: <MyAccountPage />,
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
]
export const publicRoutes: IRoutes[] = [
  {
    title: 'Home',
    path: 'index',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <Page404 />,
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

export const sidebarRoutes: Omit<IRoutes, 'element'>[] = [
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
