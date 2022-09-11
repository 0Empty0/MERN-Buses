import { useEffect } from 'react'
import './App.scss'
import { useAppDispatch } from './hooks/use-redux'
import { getUser } from './store/features/user/userSlice'

function App() {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getUser())
	}, [dispatch])

	return <div></div>
}

export default App
