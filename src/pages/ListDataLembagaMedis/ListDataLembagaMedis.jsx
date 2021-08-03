import "./ListDataLembagaMedis.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function UserList1() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/lembagaMedis`)
      .then((res) => {
        res.data.forEach((obj) => {
          obj.id=obj._id;
          const arraykosong = Object.values(obj.riwayat_penyakit)
          arraykosong.forEach((newObj)=>{
            obj.penyakit = newObj.penyakit
            obj.tahun = newObj.tahun
          });
          obj.sidik_jari=obj.rekam_forensik.sidik_jari
          obj.retina_scan=obj.rekam_forensik.retina_scan
          obj.DNA=obj.rekam_forensik.DNA
          console.log(arraykosong)
        });
        setData(res.data)
        console.log(res.data)
      })
      .catch((e) => console.log(e.message));
  }, []);

  const handleDelete = async (id) => {
    setData(data.filter((item) => item.id !== id));
    await axios.delete(`http://localhost:8000/lembagaMedis/${id}`)
    alert("Telah di Delete")
    window.location.reload()
  };
  
  const columns = [
    { field: "NIK", headerName: "NIK", width: 140 },
    { field: "tahun", headerName: "Tahun Penyakit", width: 200 },
    { field: "penyakit", headerName: "Nama Penyakit", width: 200 },
    { field: "sidik_jari", headerName: "Sidik Jari", width: 200 },
    { field: "retina_scan", headerName: "Retina Scan", width: 200 },
    { field: "DNA", headerName: "DNA", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
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
