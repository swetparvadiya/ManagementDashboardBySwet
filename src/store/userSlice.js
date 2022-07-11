import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: true,
	currentUser: null,
}
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		signInUser: (state, action) => {
			state.currentUser = action.payload
			state.loading = false
		},
		signOutUser: (state) => {
			state.currentUser = null
		},
		setLoading: (state, action) => {
			state.loading = action.payload
		},
	},
})

export const { signInUser, signOutUser, setLoading } = userSlice.actions

export default userSlice.reducer
