import { FC, Fragment, PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren<unknown>> = props => {
	return <Fragment>{props.children}</Fragment>
}

export default Layout
