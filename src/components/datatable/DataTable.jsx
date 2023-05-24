import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs,doc,deleteDoc,onSnapshot } from "firebase/firestore";
import {db} from "../../firebase"
const DataTable = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const unsub = onSnapshot(collection(db, "users"), (snapShot) => {
			let list=[]
			snapShot.docs.forEach(doc=>{
				list.push({id:doc.id,...doc.data()})
			})
			setData(list)
		},
		(error)=>{
			console.log(error)
		});

		return ()=>unsub()
	}, []);


	const handleDelete = async(id) => {
		try{
			await deleteDoc(doc(db,"users",id))
			setData(data.filter((item)=>item.id!==id))
		} catch (err){
			console.log(err)
		}
	};
	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<Link to="/users/test">
							<div className="viewButton">View</div>
						</Link>
						<div
							className="deleteButton"
							onClick={() => handleDelete(params.row.id)}
						>
							Delete
						</div>
					</div>
				);
			},
		},
	];
	return (
		<div className="dataTable">
			<div className="datatableTitle">
				Add New User
				<Link to="/users/new" className="link">
					Add New
				</Link>
			</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={userColumns.concat(actionColumn)}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 5 },
					},
				}}
				pageSizeOptions={[5, 9]}
				checkboxSelection
			/>
		</div>
	);
};

export default DataTable;
