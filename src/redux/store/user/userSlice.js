import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginUserAsync = createAsyncThunk(
	"user/loginUserAsync",
	async (newUser) => {
		let usersFromLocalStorage = JSON.parse(localStorage.getItem("users")) || [];
		const existingUser = usersFromLocalStorage.find(
			(u) => u.email === newUser.email
		);

		if (!existingUser) {
			usersFromLocalStorage.push(newUser);
			localStorage.setItem("users", JSON.stringify(usersFromLocalStorage));
			return newUser;
		} else {
			return existingUser;
		}
	}
);
export const logoutUserAsync = createAsyncThunk(
	"user/logoutUserAsync",
	async (user) => {
		return user;
	}
);

export const addMovieToUserWatchListAsync = createAsyncThunk(
	"user/addMovieToUserWatchListAsync",
	async ({ user, movie }) => {
		let usersFromLocalStorage = JSON.parse(localStorage.getItem("users")) || [];
		const updatedUsers = usersFromLocalStorage.map((u) => {
			if (u.email === user.email) {
				if (!u.watchList.some((m) => m.imdbID === movie.imdbID)) {
					return {
						...u,
						watchList: [...u.watchList, movie],
					};
				}
			}
			return u;
		});

		localStorage.setItem("users", JSON.stringify(updatedUsers));

		const updatedUser = updatedUsers.find((u) => u.email === user.email);

		return updatedUser;
	}
);
export const removeMovieFromUserWatchListAsync = createAsyncThunk(
	"user/removeMovieFromUserWatchListAsync",
	async ({ user, movie }) => {
		let usersFromLocalStorage = JSON.parse(localStorage.getItem("users")) || [];
		let updatedUserIndex = usersFromLocalStorage.findIndex(
			(u) => u.email === user.email
		);
		if (updatedUserIndex !== -1) {
			let updatedUser = usersFromLocalStorage[updatedUserIndex];
			updatedUser.watchList = updatedUser.watchList.filter(
				(w) => w.Title !== movie.Title
			);
			usersFromLocalStorage[updatedUserIndex] = updatedUser;

			localStorage.setItem("users", JSON.stringify(usersFromLocalStorage));

			return updatedUser;
		}
	}
);
export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: {
			email: null,
			watchList: [],
			isLoggedIn: false,
		},
	},
	reducers: {
		// loggedInUser: (state, action) => {
		// 	state.user = action.payload;
		// },
		// loggedOut: (state, action) => {
		// 	state.user = null;
		// },
	},
	extraReducers: (builder) => {
		builder.addCase(loginUserAsync.fulfilled, (state, action) => {
			console.log(action.payload);
			state.user = action.payload;
		});
		builder.addCase(logoutUserAsync.fulfilled, (state, action) => {
			state.user.isLoggedIn = !action.payload.isLoggedIn;
		});
		builder.addCase(addMovieToUserWatchListAsync.fulfilled, (state, action) => {
			// console.error(action.payload);

			// state.user.watchList = action.payload.watchList;
			state.user = action.payload;
		});
		builder.addCase(
			removeMovieFromUserWatchListAsync.fulfilled,
			(state, action) => {
				// console.error(action.payload);

				// state.user.watchList = action.payload.watchList;
				state.user = action.payload;
			}
		);
	},
});

export const { loggedInUser, loggedOut } = userSlice.actions;
export const currentUser = (state) => state.user.user;
export default userSlice.reducer;
