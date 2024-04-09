import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import {
	addMovieToUserWatchListAsync,
	removeMovieFromUserWatchListAsync,
} from "../../redux/store/user/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle as solidCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle as farCheckCircle } from "@fortawesome/free-regular-svg-icons";
function MovieCard({ movie }) {
	const currentUser = useSelector((state) => state.user.user);
	const [add, setAdd] = useState(false);
	const dispatch = useDispatch();
	function addToList() {
		if (currentUser) {
			const toggleAdd = !add;
			setAdd(toggleAdd);

			if (toggleAdd == false) {
				dispatch(
					removeMovieFromUserWatchListAsync({ user: currentUser, movie: movie })
				);
			} else {
				dispatch(
					addMovieToUserWatchListAsync({ user: currentUser, movie: movie })
				);
			}
		}
	}
	return (
		<>
			<Card style={{ width: "20rem" }}>
				<FontAwesomeIcon
					icon={add == true ? solidCheckCircle : farCheckCircle}
					size="2x"
					style={{
						position: "absolute",
						top: "5px",
						left: "5px",
						color: "green",
						zIndex: "999",
						cursor: "pointer",
					}}
					onClick={addToList}
				/>
				<Card.Img
					style={{ height: "300px", objectFit: "cover" }}
					variant="top"
					src={movie.Poster}
				/>
				<Card.Body>
					<Card.Title>
						{movie.Title.length > 20
							? movie.Title.substring(0, 20) + "...."
							: movie.Title}
					</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						{movie.Year}
					</Card.Subtitle>
					<Card.Text>{movie.Plot}</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}

export default MovieCard;
