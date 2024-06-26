import React from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { removeMovieFromUserWatchListAsync } from "../../redux/store/user/userSlice";
function WatchListCard({ movie }) {
	const currentUser = useSelector((state) => state.user.user);
	const dispatch = useDispatch();
	function removeFromList() {
		if (currentUser) {
			dispatch(
				removeMovieFromUserWatchListAsync({ user: currentUser, movie: movie })
			);
		}
	}
	return (
		<>
			<Card style={{ width: "20rem" }}>
				<FontAwesomeIcon
					size="2x"
					icon={faTimesCircle}
					style={{
						position: "absolute",
						top: "5px",
						left: "5px",
						color: "green",
						zIndex: "999",
						cursor: "pointer",
					}}
					onClick={removeFromList}
				/>
				<Card.Img
					style={{ height: "300px", objectFit: "cover" }}
					variant="top"
					src={movie.Poster}
				/>
				<Card.Body>
					<OverlayTrigger
						overlay={
							<Popover
								style={{
									backgroundColor: "lightyellow",
									padding: "4px",
									color: "black",
									fontWeight: "700",
								}}
							>
								{movie.Title}
							</Popover>
						}
					>
						<Card.Title>
							{movie.Title.length > 20
								? movie.Title.substring(0, 20) + "...."
								: movie.Title}
						</Card.Title>
					</OverlayTrigger>

					<Card.Subtitle className="mb-2 text-muted">
						{movie.Year}
					</Card.Subtitle>
					<Card.Text>{movie.Plot}</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}

export default WatchListCard;
