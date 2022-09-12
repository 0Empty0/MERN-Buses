import { FC } from 'react'
import ReactDOM from 'react-dom'

import styles from './Notification.module.scss'

type notification = 'success' | 'info' | 'warning' | 'error'

const Notification: FC<{ type: notification; label: string }> = ({
	type = 'success',
	label,
}) => {
	const notificationRoot: HTMLElement | null =
		document.getElementById('notification')

	return ReactDOM.createPortal(
		<div className={`${styles.notification} ${styles[type]}`}>{label}</div>,
		notificationRoot!
	)
}

export default Notification
