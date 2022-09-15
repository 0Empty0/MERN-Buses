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

interface IUser {
	username: string
	password: string
}

export const registerUser = createAsyncThunk(
	'user/registerUser',
	async (params: IUser) => {
		try {
			const { data } = await axios.post('/user/register', params)

			if (data.token) {
				localStorage.setItem('token', data.token)
			}

			return data
		} catch (error) {
			console.log(error)
		}
	}
)
export const loginUser = createAsyncThunk(
	'user/loginUser',
	async (params: IUser) => {
		try {
			const { data } = await axios.post('/user/login', params)

			if (data.token) {
				localStorage.setItem('token', data.token)
			}

			return data
		} catch (error) {
			console.log(error)
		}
	}
)
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
	reducers: {
		logout: (state: IUserState) => {
			state.user = null
			state.token = null
			state.isLoading = false
			state.status = null
		},
	},
	extraReducers: {
		//Register User
		[registerUser.pending as any]: (state: IUserState): void => {
			state.isLoading = true
			state.status = ''
		},
		[registerUser.fulfilled as any]: (
			state: IUserState,
			action: PayloadAction<IUserState>
		): void => {
			state.isLoading = false
			state.user = action.payload.user
			state.token = action.payload.token
			state.status = action.payload.status
		},
		[registerUser.rejected as any]: (
			state: IUserState,
			action: PayloadAction<IUserState>
		): void => {
			state.isLoading = false
			state.status = action.payload.status
		},

		//Login User
		[loginUser.pending as any]: (state: IUserState): void => {
			state.isLoading = true
			state.status = ''
		},
		[loginUser.fulfilled as any]: (
			state: IUserState,
			action: PayloadAction<IUserState>
		): void => {
			state.isLoading = false
			state.user = action.payload.user
			state.token = action.payload.token
			state.status = action.payload.status
		},
		[loginUser.rejected as any]: (
			state: IUserState,
			action: PayloadAction<IUserState>
		): void => {
			state.isLoading = false
			state.status = action.payload.status
		},

		//Get User
		[getUser.pending as any]: (state: IUserState): void => {
			state.isLoading = true
			state.status = null
		},
		[getUser.fulfilled as any]: (
			state: IUserState,
			action: PayloadAction<IUserState>
		): void => {
			state.isLoading = false
			state.user = action.payload.user
			state.token = action.payload.token
			state.status = action.payload.status
		},
		[getUser.fulfilled as any]: (
			state: IUserState,
			action: PayloadAction<IUserState>
		): void => {
			state.isLoading = false
			state.status = action.payload.status
		},
	},
})

export const checkIsAuth = (state: any) => Boolean(state.user.token)

export const { logout } = userSlice.actions
export default userSlice.reducer
