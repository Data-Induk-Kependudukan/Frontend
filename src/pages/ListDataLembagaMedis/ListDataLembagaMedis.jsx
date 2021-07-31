import "./ListDataLembagaMedis.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList1() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "NIK", width: 140 },
    { field: "user", headerName: "Nama", width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "tempat_lahir", headerName: "Tempat Lahir", width: 200 },
    { field: "tanggal_lahir", headerName: "Tanggal Lahir", width: 180 },
    { field: "alamat", headerName: "Alamat", width: 160 },
    { field: "agama", headerName: "Agama", width: 150 },
    { field: "status_kawin", headerName: "Status Kawin", width: 180 },
    { field: "pekerjaan", headerName: "Pekerjaan", width: 180 },
    { field: "kewarganegaraan", headerName: "Kewarganegaraan", width: 200 },
    { field: "tanggal_pembuatan", headerName: "Tanggal Pembuatan", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/AdminEdit/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={20}
        checkboxSelection
      />
    </div>
  );
}
