import "./ListDataLembagaKepolisian.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function UserList2() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/lembagaKepolisian`)
      .then((res) => {
        res.data.forEach((obj) => {
          obj.id=obj._id;
          const arraykosong = Object.values(obj.riwayat_kriminal)
          arraykosong.forEach((newObj)=>{
            obj.kriminal=newObj.kriminal
            obj.pidana=newObj.pidana
          });
        });
        setData(res.data)
        console.log(res.data)
      })
      .catch((e) => console.log(e.message));
  }, []);

  const handleDelete = async (id) => {
    setData(data.filter((item) => item.id !== id));
    await axios.delete(`http://localhost:8000/lembagaKepolisian/${id}`)
    alert("Telah di Delete")
    window.location.reload()
  };
  
  const columns = [
    { field: "NIK", headerName: "NIK", width: 140 },
    { field: "kriminal", headerName: "Keterangan Kriminal", width: 200 },
    { field: "pidana", headerName: "Masa Pidana", width: 200 },
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
