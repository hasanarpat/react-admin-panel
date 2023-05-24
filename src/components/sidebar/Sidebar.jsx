import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import PropaneIcon from "@mui/icons-material/Propane";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import CabinIcon from "@mui/icons-material/Cabin";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
	
	const {dispatch} = useContext(DarkModeContext)

	return (
		<div className="sidebar">
			<div className="top">
				<Link to="/" style={{ textDecoration: "none" }}>
					<span className="logo">Crow</span>
				</Link>
			</div>
			<hr />
			<div className="center">
				<ul>
					<p className="title">Main</p>
					<li>
						<DashboardIcon className="icon" />
						<span>Dashboard</span>
					</li>
					<p className="title">List</p>
					<Link to="/users" style={{textDecoration:"none"}}>
					<li>
						<PersonIcon className="icon" />
						<span>Users</span>
					</li>
				</Link>
					
					<Link to="/products" style={{textDecoration:"none"}}>
					<li>
						<PropaneIcon className="icon" />
						<span>Products</span>
					</li>
					</Link>
					<li>
						<LocalShippingIcon className="icon" />
						<span>Orders</span>
					</li>
					<li>
						<DeliveryDiningIcon className="icon" />
						<span>Delivery</span>
					</li>

					<p className="title">Useful</p>
					<li>
						<StackedLineChartIcon className="icon" />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsIcon className="icon" />
						<span>Notifications</span>
					</li>

					<p className="title">Service</p>
					<li>
						<HealthAndSafetyIcon className="icon" />
						<span>System Health</span>
					</li>
					<li>
						<CabinIcon className="icon" />
						<span>Logs</span>
					</li>

					<p className="title">User</p>
					<li>
						<SettingsIcon className="icon" />
						<span>Settings</span>
					</li>
					<li>
						<AccountBoxIcon className="icon" />
						<span>Profile</span>
					</li>
					<li>
						<LogoutIcon className="icon" />
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<div className="bottom">
				<div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
				<div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
				<div className="colorOption" onClick={()=>dispatch({type:"TOGGLE"})}></div>
			</div>
		</div>
	);
};

export default Sidebar;
