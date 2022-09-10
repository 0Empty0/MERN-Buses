import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from '@/utils/axios'

export interface IOrderState {}

const initialState: IOrderState = {}

export const func = createAsyncThunk('order', async () => {})

const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {},
	extraReducers: {},
})

export default orderSlice.reducer
