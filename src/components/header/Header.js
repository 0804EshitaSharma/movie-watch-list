import React, { useEffect, useState } from "react";
import Search from "../search/Search";
import {useDispatch } from "react-redux";
import {
	getMoviesAsync,
	searchMoviesAsync,
} from "../../redux/store/movieSlice";
function Header() {
	const dispatch = useDispatch();
	const [query, setQuery] = useState("");
	useEffect(() => {
		dispatch(getMoviesAsync());
	}, [dispatch]);
	function searchMovie() {
		dispatch(searchMoviesAsync(query));
	}
	function onInputChange($event) {
		const query = $event.target.value;
		setQuery(query);
	}
	return (
		<>
			<div className="p-4">
				<h1 className="mt-4 ml-2 ">Welcome to Watchlists</h1>
				<p>
					Browse movies, add them to watchlists and share them with friends.
				</p>
				<Search searchMovie={searchMovie} onInputChange={onInputChange} />
			</div>
		</>
	);
}

export default Header;
