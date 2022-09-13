import { FC } from 'react'
import ReactDOM from 'react-dom'

import styles from './Notification.module.scss'

const Notification: FC<{ label: string }> = ({ label }) => {
	const notificationRoot: HTMLElement | null =
		document.getElementById('notification')

	return ReactDOM.createPortal(
		<div className={styles.notification}>{label}</div>,
		notificationRoot!
	)
}

export default Notification
