import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from '@/utils/axios'

export interface IReviewState {
	isLoading: boolean
}

const initialState: IReviewState = {
	isLoading: false,
}

export const func = createAsyncThunk('review', async () => {})

const reviewSlice = createSlice({
	name: 'review',
	initialState,
	reducers: {},
	extraReducers: {},
})

export default reviewSlice.reducer
