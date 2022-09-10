import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from '@/utils/axios'

export interface IAgencyState {}

const initialState: IAgencyState = {}

export const func = createAsyncThunk('agency', async () => {})

const agencySlice = createSlice({
	name: 'agency',
	initialState,
	reducers: {},
	extraReducers: {},
})

export default agencySlice.reducer
