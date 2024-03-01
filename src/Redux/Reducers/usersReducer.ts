import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type UsersSatte = {
	email: string,
	id: string,
	token: string,
}

const initialState: UsersSatte = {
    email: '',
    id: '',
    token: '',
}

export const usersSlice = createSlice({
    name: 'users',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<{email: string, id: string, token: string}>) => {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.token = action.payload.token;
        }
    },
})

export const { setToken } = usersSlice.actions

export default usersSlice.reducer