import { FC, PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'

const Modal: FC<PropsWithChildren<unknown>> = props => {
	const modalRoot: HTMLElement | null = document.getElementById('modal')

	return ReactDOM.createPortal(props.children, modalRoot!)
}

export default Modal
