import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/table/ListTable";

const Single = () => {
	return (
		<div className="single">
			<Sidebar />
			<div className="singleContainer">
				<Navbar />
				<div className="top">
					<div className="left">
						<div className="editButton">Edit</div>
						<h1 className="title">Information</h1>
						<div className="item">
							<img
								src="https://images.pexels.com/photos/15252557/pexels-photo-15252557/free-photo-of-kent-adam-gece-sokak.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
								alt=""
								className="itemImg"
							/>
							<div className="details">
								<h1 className="itemTitle">Jane Doe</h1>
								<div className="detailItem">
									<span className="itemKey">Phone:</span>
									<span className="itemValue">+1 2335 67 89</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Address:</span>
									<span className="itemValue">
										Elton St. 234 Garden Yd. Newyork
									</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Country:</span>
									<span className="itemValue">Holland</span>
								</div>
							</div>
						</div>
					</div>
					<div className="right">
						<Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
					</div>
				</div>
				<div className="bottom">
					<h1 className="title">Last Transactions</h1>
					<ListTable />
				</div>
			</div>
		</div>
	);
};

export default Single;
