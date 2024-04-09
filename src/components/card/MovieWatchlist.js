import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WatchListCard from './WatchListCard';
import { useDispatch, useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";
function MovieWatchlist() {
	const currentUser = useSelector((state) => state.user.user);
	return (
		<Container fluid className="mt-4 ml-2 p-4">
			<Row>
				<h1 className="mt-4 ml-2 p-4">View Your WatchList</h1>
			</Row>
			{currentUser.watchList.length == 0 ? (
				<Alert key="warning" variant="warning">
					Your Wach list is Empty !
				</Alert>
			) : (
				<Row xs={1} md={3} className="g-4 flex-nowrap overflow-auto">
					{currentUser.watchList.map((movie, idx) => (
						<Col key={idx}>
							<WatchListCard key={movie.imdbID} movie={movie} />
						</Col>
					))}
				</Row>
			)}
		</Container>
	);
}

export default MovieWatchlist