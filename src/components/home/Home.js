import React, { useEffect } from "react";
import Header from "../header/Header";
import Container from "react-bootstrap/Container";
import Display from "../display/Display";

import { useSelector, useDispatch } from "react-redux";
import { selectAllMovies, getMoviesAsync } from "../../redux/store/movieSlice";
import Spinner from "react-bootstrap/Spinner";
function Home() {
	const movies = useSelector(selectAllMovies);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMoviesAsync());
	}, [dispatch]);
	return (
		<>
			<Container>
				<Header />
			</Container>
			{!movies ? (
				<Spinner
					style={{
						position: "absolute",
						top: "50%",
						left: "55%",
						
					}}
					animation="border"
					variant="primary"
				/>
			) : (
				<Container>{movies && <Display movies={movies} />}</Container>
			)}
		</>
	);
}

export default Home;
