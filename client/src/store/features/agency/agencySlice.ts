import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from '@/utils/axios'

export interface IAgencyState {
	isLoading: boolean
}

const initialState: IAgencyState = {
	isLoading: false,
}

export const func = createAsyncThunk('agency', async () => {})

const agencySlice = createSlice({
	name: 'agency',
	initialState,
	reducers: {},
	extraReducers: {},
})

export default agencySlice.reducer
