import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from '@/utils/axios'

export interface IUserState {
	user: string | unknown
	token: string | unknown
	isLoading: boolean
	status: string | unknown
}

const initialState: IUserState = {
	user: null,
	token: null,
	isLoading: false,
	status: null,
}

export const getUser = createAsyncThunk('user/getUser', async () => {
	try {
		const { data } = await axios.get('/user')

		return data
	} catch (error) {
		console.log(error)
	}
})

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: {
		//Get User
		[getUser.pending as any]: (state: IUserState) => {
			state.isLoading = true
			state.status = null
		},
		[getUser.fulfilled as any]: (
			state: IUserState,
			action: PayloadAction<IUserState>
		) => {
			state.isLoading = false
			state.user = action.payload.user
			state.token = action.payload.token
			state.status = action.payload.status
		},
		[getUser.fulfilled as any]: (
			state: IUserState,
			action: PayloadAction<IUserState>
		) => {
			state.isLoading = false
			state.status = action.payload.status
		},
	},
})

export const checkIsAuth = (state: any) => Boolean(state.user.token)

export default userSlice.reducer
