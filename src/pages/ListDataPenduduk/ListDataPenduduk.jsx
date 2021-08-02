import "./ListDataPenduduk.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function UserList() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/mainIdentity`)
      .then((res) => {
        res.data.forEach((obj) => {
          obj.id=obj._id;
          const arraykosong = Object.values(obj.alamat)
          obj.alamatBaru = arraykosong.join(" ")
        });
        setData(res.data)
        console.log(res.data)
      })
      .catch((e) => console.log(e.message));
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "NIK", headerName: "NIK", width: 140 },
    { field: "nama_lkp", headerName: "Nama", width: 200},
    { field: "tmp_lhr", headerName: "Tempat Lahir", width: 200 },
    { field: "tgl_lhr", headerName: "Tanggal Lahir", width: 180 },
    { field: "alamatBaru", headerName: "Alamat", width: 200 },
    { field: "agama", headerName: "Agama", width: 150 },
    { field: "sts_kawin", headerName: "Status Kawin", width: 180 },
    { field: "pekerjaan", headerName: "Pekerjaan", width: 180 },
    { field: "kewarganegaraan", headerName: "Kewarganegaraan", width: 200 },
    { field: "tgl_pembuatan", headerName: "Tanggal Pembuatan", width: 200 },
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
