import "./ListDataLembagaKeuangan.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function UserList4() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/lembagaKeuangan`)
      .then((res) => {
        res.data.forEach((obj) => {
          obj.id=obj._id;
          obj.kotor=obj.gaji.kotor
          obj.bersih=obj.gaji.bersih
        });
        setData(res.data)
        console.log(res.data)
      })
      .catch((e) => console.log(e.message));
  }, []);

  const handleDelete = async (id) => {
    setData(data.filter((item) => item.id !== id));
    await axios.delete(`http://localhost:8000/lembagaKeuangan/${id}`)
    alert("Telah di Delete")
    window.location.reload()
  };
  
  const columns = [
    { field: "NIK", headerName: "NIK", width: 140 },
    { field: "total_harta", headerName: "Total Harta", width: 200 },
    { field: "kotor", headerName: "Gaji Kotor", width: 200 },
    { field: "bersih", headerName: "Gaji Bersih", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.NIK)}
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
