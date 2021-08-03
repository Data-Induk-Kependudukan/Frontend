import "./ListDataPendudukDanKeuangan.css";
import { DataGrid } from "@material-ui/data-grid";
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
          const datauang = Object.values(obj.DataKeuangan)
          datauang.forEach((datakeuangan)=>{
            obj.kotor = datakeuangan.gaji.kotor
            obj.bersih = datakeuangan.gaji.bersih
            obj.total_harta = datakeuangan.total_harta
          });
        });
        setData(res.data)
      })
      .catch((e) => console.log(e.message));
  }, []);
  
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
    { field: "bersih", headerName: "Gaji Bersih", width: 200 }
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
