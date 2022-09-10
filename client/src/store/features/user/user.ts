import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from '@/utils/axios'

export interface IUserState {}

const initialState: IUserState = {}

export const func = createAsyncThunk('user', async () => {})

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: {},
})

export default userSlice.reducer
