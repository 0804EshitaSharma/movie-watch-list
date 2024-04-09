import Home from "./components/home/Home";
import React, { useEffect, useState } from "react";
import SideBar from "./components/sidebar/SideBar";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import User from "./components/user/User";
import { useSelector, useDispatch } from "react-redux";
import { currentUser } from "./redux/store/user/userSlice";
import Display from "./components/display/Display";
import MovieWatchlist from "./components/MovieWatchlist";
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
