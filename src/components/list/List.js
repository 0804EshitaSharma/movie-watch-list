import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function List() {

	return (
		<div className="text-white">
			<h4>List</h4>
			<Link to="/watchlist">
				<Button variant="secondary" className="w-100 mb-2 mb-sm-0">
					view WatchList
				</Button>
			</Link>
		</div>
	);
}

export default List;
