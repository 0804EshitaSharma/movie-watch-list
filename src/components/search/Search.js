import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Search({ onInputChange, searchMovie }) {
	return (
		<>
			<InputGroup className="mb-5">
				<Form.Control
					placeholder="Search Movies"
					aria-label="Search Movies"
					aria-describedby="basic-addon2"
					onChange={onInputChange}
					onKeyDown={searchMovie}
				/>
				<Button
			
					variant="primary"
					id="button-addon2"
					onClick={searchMovie}
				>
					Search
				</Button>
			</InputGroup>
		</>
	);
}

export default Search;
