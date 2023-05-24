import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useContext } from "react";
import {DarkModeContext} from "../../context/darkModeContext"
const Navbar = () => {

	const {dispatch} = useContext(DarkModeContext)

	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder="Search" />
					<SearchIcon className="icon" />
				</div>
				<div className="items">
					<div className="item">
						<LanguageIcon className="icon" />
						English
					</div>
					<div className="item">
						<DarkModeIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>
					</div>
					<div className="item">
						<FullscreenExitIcon className="icon" />
					</div>
					<div className="item">
						<NotificationsIcon className="icon" />
            <div className="counter">1</div>
					</div>
					<div className="item">
						<ChatBubbleOutlineIcon className="icon" />
            
            <div className="counter">2</div>
					</div>
					<div className="item">
						<ListOutlinedIcon className="icon" />
					</div>
					<div className="item">
						<img
							src="https://images.pexels.com/photos/15252557/pexels-photo-15252557/free-photo-of-kent-adam-gece-sokak.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
							alt="avatar"
							className="avatar"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
