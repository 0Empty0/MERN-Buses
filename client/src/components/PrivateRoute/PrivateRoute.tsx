import { FC, PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { checkIsAuth } from '@/store/features/user/userSlice'
import { useAppSelector } from '@/hooks/use-redux'

const PrivateRouter: FC<PropsWithChildren<unknown>> = ({ children }): any => {
	const isAuth = useAppSelector(checkIsAuth)
	const navigation = useNavigate()

	useEffect(() => {
		!isAuth && navigation('/')
	}, [isAuth])

	if (isAuth) {
		return children
	}
}

export default PrivateRouter
