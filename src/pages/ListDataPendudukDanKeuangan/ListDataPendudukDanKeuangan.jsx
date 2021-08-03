import "./ListDataPendudukDanKeuangan.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function UserListdanKeuangan() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/lembagaKeuanganWithMainIdentity`)
      .then((res) => {
        res.data.forEach((obj) => {
          obj.id=obj._id;
          const arraykosong = Object.values(obj.alamat)
          obj.alamatBaru = arraykosong.join(" ")
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
    await axios.delete(`http://localhost:8000/mainIdentity/${id}`)
    alert("Telah di Delete")
    window.location.reload()
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
            <Link to={"/AdminEdit/" + params.row.NIK}>
              <button className="UserListdanKeuanganEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="UserListdanKeuanganDelete"
              onClick={() => handleDelete(params.row.NIK)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="UserListdanKeuangan">
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
