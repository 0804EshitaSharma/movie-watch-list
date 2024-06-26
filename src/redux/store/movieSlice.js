import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "https://www.omdbapi.com/";

export const getMoviesAsync = createAsyncThunk(
	"movies/getMoviesAsync ",
	async () => {
		const response = await fetch(
			`${baseURL}?apikey=49105b82&s=batman&plot=full`
		);

		if (response.ok) {
			const movies = await response.json();
			return movies;
		}
	}
);

export const searchMoviesAsync = createAsyncThunk(
	"movies/searchMoviesAsync",
	async (query) => {
		const response = await fetch(`${baseURL}?s=${query}&apikey=49105b82`);
		if (response.ok) {
			const movies = await response.json();
			return movies;
		}
	}
);

export const shoWatchListAsync = createAsyncThunk(
	"movies/shoWatchListAsync",
	async (movies) => {
		return movies;
	}
);
export const movieSlice = createSlice({
	name: "movie",
	initialState: {
		movies: [],
		error: undefined,
	},
	reducers: {
		
	},
	extraReducers: (builder) => {
		builder.addCase(getMoviesAsync.fulfilled, (state, action) => {
			state.movies = action.payload.Search;
			state.error = action.payload.Error || "";
		});
		builder.addCase(searchMoviesAsync.fulfilled, (state, action) => {
			state.movies = action.payload.Search;
			state.error = action.payload.Error || "";
		});
		builder.addCase(shoWatchListAsync.fulfilled, (state, action) => {
			state.movies = action.payload;
		});
	},
});

export const selectAllMovies = (state) => state.movies.movies;

export default movieSlice.reducer;
