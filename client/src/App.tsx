import { useEffect } from 'react'
import './App.scss'
import Layout from './components/Layout/Layout'
import Routers from './components/Routers/Routers'
import { useAppDispatch } from './hooks/use-redux'
import { getUser } from './store/features/user/userSlice'

function App() {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getUser())
	}, [dispatch])

	return (
		<Layout>
			<Routers />
		</Layout>
	)
}

export default App
