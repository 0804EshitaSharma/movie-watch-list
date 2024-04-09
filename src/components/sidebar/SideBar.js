import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUserAsync } from "../../redux/store/user/userSlice";
import {
	CDBSidebar,
	CDBSidebarContent,
	CDBSidebarFooter,
	CDBSidebarHeader,
	CDBSidebarMenu,
	CDBSidebarMenuItem,
} from "cdbreact";

function SideBar({ user }) {
	const dispatch = useDispatch();

	function handleLogOut() {
		dispatch(logoutUserAsync(user));
	}
	return (
		<>
			<div
				style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
			>
				<CDBSidebar textColor="#fff" backgroundColor="#333">
					<CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
						<h4 style={{ color: "inherit" }}>Watchlists</h4>
					</CDBSidebarHeader>

					<CDBSidebarContent className="sidebar-content">
						<CDBSidebarMenu>
							<NavLink exact to="/home" activeClassName="activeClicked">
								<CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
							</NavLink>
							<NavLink exact to="/watchlist" activeClassName="activeClicked">
								<CDBSidebarMenuItem icon="list">
									My Watchlist
								</CDBSidebarMenuItem>
							</NavLink>

							<CDBSidebarMenuItem icon="user" onClick={handleLogOut}>
								LogOut
							</CDBSidebarMenuItem>
						</CDBSidebarMenu>
					</CDBSidebarContent>

					<CDBSidebarFooter style={{ textAlign: "center" }}>
						<CDBSidebarMenuItem icon="fa-light fa-play">{user.email}</CDBSidebarMenuItem>
					</CDBSidebarFooter>
				</CDBSidebar>
			</div>
		</>
	);
}

export default SideBar;
