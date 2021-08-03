import "./EditDataSaya.css";
import { useState, useEffect } from "react";
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function EditDataSaya() {

  const [data, setData] = useState([]);

  const { NIK } = useParams()
  useEffect(() => {
    axios.get(`http://localhost:8000/mainIdentity/${NIK}`)
      .then((res) => {
        res.data.id = res.data._id;
        setData(res.data)
        console.log(res.data)
      })
      .catch((e) => console.log(e.message));
  }, []);

  const handleUpdate = async (data) => {
    console.log(data)
    await axios.put(`http://localhost:8000/mainIdentity/${NIK}`, data)
  };

  return (

    <div className="User">
      <h1 className="userTitleContainer">Edit Data Kependudukan</h1>
      <Formik
        initialValues={{
          NIK: data.NIK || '',
          nama_lkp: data.nama_lkp || '',
          tmp_lhr: data.tmp_lhr || '',
          tgl_lhr: data.tgl_lhr || '',
          jns_klmn: data.jns_klmn || '',
          goldar: data.goldar || '',
          Alamat: data.alamat?.Alamat || '',
          RT: data.alamat?.RT || '',
          RW: data.alamat?.RW || '',
          KelDesa: data.alamat?.KelDesa || '',
          Kec: data.alamat?.Kec || '',
          KabKot: data.alamat?.KabKot || '',
          Prov: data.alamat?.Prov || '',
          Pos: data.alamat?.Pos || '',
          agama: data.agama || '',
          sts_kawin: data.sts_kawin || '',
          pekerjaan: data.pekerjaan || '',
          kewarganegaraan: data.kewarganegaraan || ''
        }}
        enableReinitialize={true}
        onSubmit={async (values) => {
          const newObj = {
            NIK: values.NIK,
            nama_lkp: values.nama_lkp,
            tmp_lhr: values.tmp_lhr,
            tgl_lahir: values.tgl_lahir,
            jns_klmn: values.jns_klmn,
            goldar: values.goldar,
            alamat: {
              Alamat: values.Alamat,
              RT: values.RT,
              RW: values.RW,
              KelDesa: values.KelDesa,
              Kec: values.Kec,
              KabKot: values.KabKot,
              Prov: values.Prov,
              Pos: values.Pos
            },
            agama: values.agama,
            sts_kawin: values.sts_kawin,
            pekerjaan: values.pekerjaan,
            kewarganegaraan: values.kewarganegaraan,
            foto: ""
          }
          try {
            await handleUpdate(newObj)
            alert("Data telah diupdate!!!")
            window.location.reload()
          } catch (e) {
            console.log(e.message);
          }
        }}
      >
        {() => (
          <Form className="userUpdateForm">
            <div>
              <label htmlFor="NIK">NIK</label>
              <Field className="userUpdateItem" type="text" name="NIK" required />
            </div>
            <div>
              <label htmlFor="nama_lkp">Nama Lengkap</label>
              <Field className="userUpdateItem" type="text" name="nama_lkp" />
            </div>
            <div>
              <label htmlFor="tmp_lhr">Tempat Lahir</label>
              <Field className="userUpdateItem" type="text" name="tmp_lhr" />
            </div>
            <div>
              <label htmlFor="tgl_lahir">Tanggal Lahir</label>
              <Field className="userUpdateItem" type="text" name="tgl_lahir" />
            </div>
            <div>
              <label htmlFor="jns_klmn">Jenis Kelamin</label>
              <Field className="userUpdateItem" type="text" name="jns_klmn" />
            </div>
            <div>
              <label htmlFor="goldar">Golongan Darah</label>
              <Field className="userUpdateItem" type="text" name="goldar" />
            </div>
            <div>
              <label htmlFor="Alamat">Alamat</label>
              <Field className="userUpdateItem" type="text" name="Alamat" />
            </div>
            <div>
              <label htmlFor="RT">RT</label>
              <Field className="userUpdateItem" type="text" name="RT" />
            </div>
            <div>
              <label htmlFor="RW">RW</label>
              <Field className="userUpdateItem" type="text" name="RW" />
            </div>
            <div>
              <label htmlFor="Kel/Desa">Kelurahan/Desa</label>
              <Field className="userUpdateItem" type="text" name="Kel/Desa" />
            </div>
            <div>
              <label htmlFor="Kec">Kecamatan</label>
              <Field className="userUpdateItem" type="text" name="Kec" />
            </div>
            <div>
              <label htmlFor="KabKot">Kabupaten/Kota</label>
              <Field className="userUpdateItem" type="text" name="KabKot" />
            </div>
            <div>
              <label htmlFor="Prov">Prov</label>
              <Field className="userUpdateItem" type="text" name="Prov" />
            </div>
            <div>
              <label htmlFor="Pos">Pos</label>
              <Field className="userUpdateItem" type="text" name="Pos" />
            </div>
            <div>
              <label htmlFor="agama">Agama</label>
              <Field className="userUpdateItem" type="text" name="agama" />
            </div>
            <div>
              <label htmlFor="sts_kawin">Status Kawin</label>
              <Field className="userUpdateItem" type="text" name="sts_kawin" />
            </div>
            <div>
              <label htmlFor="pekerjaan">Pekerjaan</label>
              <Field className="userUpdateItem" type="text" name="pekerjaan" />
            </div>
            <div>
              <label htmlFor="kewarganegaraan">Kewarganegaraan</label>
              <Field className="userUpdateItem" type="text" name="kewarganegaraan" />
            </div>
            <br />
            <button className="userUpdateButton" type="submit">
              Request
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
