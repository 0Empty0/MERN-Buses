import { FC, Fragment, PropsWithChildren } from 'react'
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Notification from '@/components/UI/Notification/Notification'

const Layout: FC<PropsWithChildren<unknown>> = (props) => {
  return (
    <Fragment>
      <LoadingSpinner />
      <Notification />

      <Header />
      <main className="main">{props.children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
