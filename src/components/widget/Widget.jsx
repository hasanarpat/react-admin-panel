import { KeyboardArrowDownOutlined, Person2Outlined } from "@mui/icons-material";
import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useEffect, useState } from "react";
import {query, collection,where,getDocs} from "firebase/firestore"
import {db} from "../../firebase"


const Widget = ({ type }) => {
	let data;

    const [amount,setAmount] = useState(null)
    const [diff,setDiff] = useState(null)

	switch (type) {
		case "user":
			data = {
				title: "USERS",
				isMoney: false,
				link: "See all users",
                query:"users",
				icon: (
					<Person2Outlined
						className="icon"
						style={{
							color: "crimson",
							backgroundColor: "rgba(255,0,0,.2)",
						}}
					/>
				),
			};
			break;
		case "order":
			data = {
				title: "ORDERS",
				isMoney: false,
				link: "view all orders",
				icon: (
					<ShoppingCartCheckoutOutlinedIcon
						className="icon"
						style={{
							color: "goldenrod",
							backgroundColor: "rgba(218,165,32,.2)",
						}}
					/>
				),
			};
			break;
		case "earnings":
			data = {
				title: "EARNINGS",
				isMoney: true,
				link: "View net earnings",
				icon: (
					<MonetizationOnOutlinedIcon
						className="icon"
						style={{
							color: "green",
							backgroundColor: "rgba(0,128,0,.2)",
						}}
					/>
				),
			};
			break;
		case "product":
			data = {
				title: "PRODUCTS",
				isMoney: false,
				link: "See details",
                query:"123",
				icon: (
					<AccountBalanceWalletOutlinedIcon
						className="icon"
						style={{
							color: "purple",
							backgroundColor: "rgba(128,0,128,.2)",
						}}
					/>
				),
			};
			break;
		default:
			break;
	}

	useEffect(() => {
		const fetchData = async () => {
			const today = new Date();
			const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
			const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

			const lastMonthQuery = query(
				collection(db, data.query),
				where("timeStamp", "<=", today),
				where("timeStamp", ">", lastMonth)
			);
            const prevMonthQuery = query(
				collection(db, data.query),
				where("timeStamp", "<=", lastMonth),
				where("timeStamp", ">", prevMonth)
			);
            const lastMonthData = await getDocs(lastMonthQuery)
            const prevMonthData = await getDocs(prevMonthQuery)

            setAmount(lastMonthData.docs.length)
            setDiff(((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *100)
		};
		fetchData();
	}, []);

	return (
		<div className="widget">
			<div className="left">
				<span className="title">{data.title}</span>
				<span className="counter">
					{data.isMoney && "$"} {amount}
				</span>
				<span className="link">{data.link}</span>
			</div>
			<div className="right">
				<div className={`percentage ${diff <0 ? "negative" : "positive"}`}>
					{diff <0 ? <KeyboardArrowDownOutlined/> : <KeyboardArrowUpOutlinedIcon />}
					{diff}%
				</div>
				{data.icon}
			</div>
		</div>
	);
};

export default Widget;
