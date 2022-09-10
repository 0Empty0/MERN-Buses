import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from '@/utils/axios'

export interface IReviewState {}

const initialState: IReviewState = {}

export const func = createAsyncThunk('review', async () => {})

const reviewSlice = createSlice({
	name: 'review',
	initialState,
	reducers: {},
	extraReducers: {},
})

export default reviewSlice.reducer
