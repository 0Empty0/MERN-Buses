import { configureStore } from '@reduxjs/toolkit'

import userSlice from './features/user/user'
import agencySlice from './features/agency/agency'
import busSlice from './features/bus/bus'
import reviewSlice from './features/review/review'
import orderSlice from './features/order/order'

const store = configureStore({
	reducer: {
		user: userSlice,
		agency: agencySlice,
		bus: busSlice,
		review: reviewSlice,
		order: orderSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
