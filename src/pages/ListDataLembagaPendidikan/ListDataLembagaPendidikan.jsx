import "./ListDataLembagaPendidikan.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function UserList3() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/lembagaPendidikan`)
      .then((res) => {
        res.data.forEach((obj) => {
          obj.id=obj._id;
          const arraykosong = Object.values(obj.riwayat_pendidikan)
          arraykosong.forEach((newObj)=>{
            obj.tahun_pendidikan=newObj.tahun
            obj.instansi_pendidikan=newObj.instansi
          });
          const arraykosong1 = Object.values(obj.riwayat_beasiswa)
          arraykosong1.forEach((newObj1)=>{
            obj.tahun_beasiswa=newObj1.tahun
            obj.instansi_beasiswa=newObj1.instansi
          });
          const arraykosong2 = Object.values(obj.riwayat_keorganisasian)
          arraykosong2.forEach((newObj2)=>{
            obj.tahun_keorganisasian=newObj2.tahun
            obj.instansi_keorganisasian=newObj2.instansi
          });
          const arraykosong3 = Object.values(obj.prestasi)
          arraykosong3.forEach((newObj3)=>{
            obj.tahun_prestasi=newObj3.tahun
            obj.keterangan_prestasi=newObj3.dicapai
          });
        });
        setData(res.data)
        console.log(res.data)
      })
      .catch((e) => console.log(e.message));
  }, []);

  const handleDelete = async (id) => {
    setData(data.filter((item) => item.id !== id));
    await axios.delete(`http://localhost:8000/lembagaPendidikan/${id}`)
    alert("Telah di Delete")
    window.location.reload()
  };
  
  const columns = [
    { field: "NIK", headerName: "NIK", width: 140 },
    { field: "tahun_pendidikan", headerName: "Tahun Pendidikan Terakhir", width: 200 },
    { field: "instansi_pendidikan", headerName: "Keterangan Pendidikan Terakhir", width: 200 },
    { field: "tahun_beasiswa", headerName: "Tahun Beasiswa Terakhir", width: 200 },
    { field: "instansi_beasiswa", headerName: "Keterangan Beasiswa Terakhir", width: 200 },
    { field: "tahun_keorganisasian", headerName: "Tahun Keorganisasian Terakhir", width: 200 },
    { field: "instansi_keorganisasian", headerName: "Keterangan Keorganisasian Terakhir", width: 200 },
    { field: "tahun_prestasi", headerName: "Tahun Prestasi Terakhir", width: 200 },
    { field: "keterangan_prestasi", headerName: "Keterangan Prestasi Terakhir", width: 200 },
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
