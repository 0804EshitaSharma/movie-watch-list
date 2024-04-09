import React from "react";
import MovieCard from "../card/MovieCard";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Display({ movies }) {
	
	return (
		<Container>
			<Row className="flex-nowrap overflow-auto">
				{movies.map((movie, idx) => (
					<Col key={idx}>
						<MovieCard key={movie.imdbID} movie={movie} />
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default Display;
