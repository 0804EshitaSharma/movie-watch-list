import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";
import MovieWatchlist from "./components/card/MovieWatchlist";
import Home from "./components/home/Home";
import User from "./components/user/User";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="home" element={<Home />}></Route>
			<Route path="watchlist" element={<MovieWatchlist />}></Route>
			<Route path="login" element={<User />}></Route>
			<Route path="*" element={<Home />}></Route>
		</Route>
	)
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
