import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import connectService from './connectService'

const initialState = {
  connections: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new goal
export const createConnection = createAsyncThunk(
  'goals/create',
  async (connectData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await connectService.createConnection(connectData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user goals
export const getConnections = createAsyncThunk(
  'connections/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await connectService.getConnections(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user goal
export const deleteConnection = createAsyncThunk(
  'connection/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await connectService.deleteConnection(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createConnection.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createConnection.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals.push(action.payload)
      })
      .addCase(createConnection.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getConnections.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getConnections.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals = action.payload
      })
      .addCase(getConnections.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteConnection.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteConnection.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals = state.goals.filter(
          (goal) => goal._id !== action.payload.id
        )
      })
      .addCase(deleteConnection.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = goalSlice.actions
export default goalSlice.reducer