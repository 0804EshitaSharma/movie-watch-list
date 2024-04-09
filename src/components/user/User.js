import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { loginUserAsync } from "../../redux/store/user/userSlice";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function User() {
	const navigate = useNavigate();
	const [newUser, setNewUser] = useState({
		email: "",
		watchList: [],
		isLoggedIn: false,
	});
	const dispatch = useDispatch();
	function handleSubmit($event) {
		$event.preventDefault();
		dispatch(loginUserAsync(newUser));
		navigate("/home");
	}
	function handleChange($event) {
		setNewUser({ email: $event.target.value, isLoggedIn: true, watchList: [] });
	}

	return (
		<div
			style={{ backgroundColor: "#b7bec9" }}
			className="d-flex justify-content-center align-items-center vh-100"
		>
			<Form
				style={{
					width: "40%",
				}}
				className="border border-primary rounded p-4 p-sm-3 bg-dark text-white mb-3"
				onSubmit={handleSubmit}
			>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={newUser.email}
						onChange={handleChange}
					/>
				</Form.Group>
				<Button
					variant="outline-primary"
					disabled={!newUser.email}
					type="submit"
				>
					Login
				</Button>
			</Form>
		</div>
	);
}

export default User;
