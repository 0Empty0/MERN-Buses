import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from '@/utils/axios'

export interface IBusState {
	isLoading: boolean
}

const initialState: IBusState = {
	isLoading: false,
}

export const func = createAsyncThunk('bus', async () => {})

const busSlice = createSlice({
	name: 'bus',
	initialState,
	reducers: {},
	extraReducers: {},
})

export default busSlice.reducer
