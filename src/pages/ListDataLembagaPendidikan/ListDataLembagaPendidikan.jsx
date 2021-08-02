import "./ListDataLembagaPendidikan.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList3() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "nik", headerName: "NIK", width: 140 },
    { field: "riwayat_pendidikan", headerName: "Riwayat Pendidikan", width: 200 },
    { field: "riwayat_beasiswa", headerName: "Riwayat Beasiswa", width: 200 },
    { field: "riwayat_keorganisasian", headerName: "Riwayat Keorganisasian", width: 200 },
    { field: "prestasi", headerName: "Prestasi", width: 200 },
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
