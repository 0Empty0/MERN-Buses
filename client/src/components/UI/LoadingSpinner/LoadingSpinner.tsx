import { FC, useState, useEffect } from 'react'

import Modal from '@/components/Layout/Modal/Modal'
import { useAppSelector } from '@/hooks/use-redux'
import styles from './LoadingSpinner.module.scss'

const LoadingSpinner: FC = () => {
	const [isShow, setIsShow] = useState(false)

	const { isLoading: userLoading } = useAppSelector(state => state.user)
	const { isLoading: agencyLoading } = useAppSelector(state => state.agency)
	const { isLoading: busLoading } = useAppSelector(state => state.bus)
	const { isLoading: reviewLoading } = useAppSelector(state => state.review)
	const { isLoading: orderLoading } = useAppSelector(state => state.order)

	useEffect(() => {
		setIsShow(
			userLoading ||
				agencyLoading ||
				busLoading ||
				reviewLoading ||
				orderLoading
		)
	}, [userLoading, agencyLoading, busLoading, reviewLoading, orderLoading])

	return <Modal>{isShow && <div>Loading...</div>}</Modal>
}

export default LoadingSpinner
