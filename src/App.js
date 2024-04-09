import React from "react";
import SideBar from "./components/sidebar/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import User from "./components/user/User";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function App() {
	const userFromStore = useSelector((state) => state.user.user);
	return (
		<>		
			{userFromStore.isLoggedIn ? (
				<div style={{ backgroundColor: "#b7bec9" }}>
					<Row>
						<Col xs={2} sm={2}>
							<SideBar user={userFromStore} />
						</Col>
						<Col xs={10} sm={10}>
							<Outlet></Outlet>
						</Col>
					</Row>
				</div>
			) : (
				<User />
			)}
		</>
	);
}

export default App;
