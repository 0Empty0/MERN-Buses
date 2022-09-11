import { configureStore } from '@reduxjs/toolkit'

import userSlice from './features/user/userSlice'
import agencySlice from './features/agency/agencySlice'
import busSlice from './features/bus/busSlice'
import reviewSlice from './features/review/reviewSlice'
import orderSlice from './features/order/orderSlice'

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
