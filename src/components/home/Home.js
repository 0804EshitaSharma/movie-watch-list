import React, { useEffect } from "react";
import Header from "../header/Header";
import Container from "react-bootstrap/Container";
import Display from "../display/Display";
import Alert from "react-bootstrap/Alert";
import { useSelector, useDispatch } from "react-redux";
import { selectAllMovies, getMoviesAsync } from "../../redux/store/movieSlice";
import Spinner from "react-bootstrap/Spinner";
function Home() {
	const movies = useSelector(selectAllMovies);
	const error = useSelector((state) => state.movies.error);
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
				<>
					<Spinner
						style={{
							position: "absolute",
							top: "50%",
							left: "55%",
						}}
						animation="border"
						variant="primary"
					/>
					{error && (
						<Container>
							<div className="p-4">
								<Alert key="danger" variant="danger">
									{error}
								</Alert>
							</div>
						</Container>
					)}
				</>
			) : (
				<Container>{movies && <Display movies={movies} />}</Container>
			)}
		</>
	);
}

export default Home;
