import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./movieSlice";
import { userSlice } from "./user/userSlice";

export const store = configureStore({
	reducer: {
		movies: movieSlice.reducer,
		user: userSlice.reducer,
	},
});
export default store;
