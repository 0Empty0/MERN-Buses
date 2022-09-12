import { FC, Fragment, PropsWithChildren } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout: FC<PropsWithChildren<unknown>> = props => {
	return (
		<Fragment>
			<Header />
			<main>{props.children}</main>
			<Footer />
		</Fragment>
	)
}

export default Layout
