import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type film_type = {id: string, l: string, type: string, rank: number, directors: string, y: number, i: img_settings};
type img_settings = {height: number, imageUrl: string, width: number}


// Define a type for the slice state
interface FilmState {
    search: string,
    films: film_type[],
}

// Define the initial state using that type
const initialState: FilmState = {
    search: 'star',
    films: [],
}

export const filmSlice = createSlice({
    name: 'film',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setFilms: (state, action: PayloadAction<film_type[]>) => {
            state.films = action.payload;
        }
    },
})

export const { setFilms, } = filmSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFilms = (state: RootState) => state.film.films

export default filmSlice.reducer
