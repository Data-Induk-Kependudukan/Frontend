import "./DataPendudukBaru.css";
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

export default function NewUser() {

  const handleNewData = async (data) => {
    return await axios.post('http://localhost:8000/mainIdentity', data)
  }

  return (
    <div className="newUser">
      <h1 className="newUserTitle">Data Kependudukan Baru</h1>
      <Formik
        initialValues={{
          NIK: "",
          nama_lkp: "",
          tmp_lhr: "",
          tgl_lhr: "",
          jns_klmn: "",
          goldar: "",
          Alamat: "",
          RT: "",
          RW: "",
          KelDesa: "",
          Kec: "",
          KabKot: "",
          Prov: "",
          Pos: "",
          agama: "",
          sts_kawin: "",
          pekerjaan: "",
          kewarganegaraan: ""
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
            await handleNewData(newObj)
            alert("Data telah dimasukkan!!!")
            window.location.reload()
          } catch (e) {
            console.log(e.message);
          }
        }}
      >
        {() => (
          <Form className="newUserForm">
            <div>
              <label htmlFor="NIK">NIK</label>
              <Field className="newUserItem" type="text" name="NIK" required />
            </div>
            <div>
              <label htmlFor="nama_lkp">Nama Lengkap</label>
              <Field className="newUserItem" type="text" name="nama_lkp" />
            </div>
            <div>
              <label htmlFor="tmp_lhr">Tempat Lahir</label>
              <Field className="newUserItem" type="text" name="tmp_lhr" />
            </div>
            <div>
              <label htmlFor="tgl_lahir">Tanggal Lahir</label>
              <Field className="newUserItem" type="text" name="tgl_lahir" />
            </div>
            <div>
              <label htmlFor="jns_klmn">Jenis Kelamin</label>
              <Field className="newUserItem" type="text" name="jns_klmn" />
            </div>
            <div>
              <label htmlFor="goldar">Golongan Darah</label>
              <Field className="newUserItem" type="text" name="goldar" />
            </div>
            <div>
              <label htmlFor="alamat">Alamat</label>
              <Field className="newUserItem" type="text" name="alamat" />
            </div>
            <div>
              <label htmlFor="RT">RT</label>
              <Field className="newUserItem" type="text" name="RT" />
            </div>
            <div>
              <label htmlFor="RW">RW</label>
              <Field className="newUserItem" type="text" name="RW" />
            </div>
            <div>
              <label htmlFor="Kel/Desa">Kelurahan/Desa</label>
              <Field className="newUserItem" type="text" name="Kel/Desa" />
            </div>
            <div>
              <label htmlFor="Kec">Kecamatan</label>
              <Field className="newUserItem" type="text" name="Kec" />
            </div>
            <div>
              <label htmlFor="KabKot">Kabupaten/Kota</label>
              <Field className="newUserItem" type="text" name="KabKot" />
            </div>
            <div>
              <label htmlFor="Prov">Prov</label>
              <Field className="newUserItem" type="text" name="Prov" />
            </div>
            <div>
              <label htmlFor="Pos">Pos</label>
              <Field className="newUserItem" type="text" name="Pos" />
            </div>
            <div>
              <label htmlFor="agama">Agama</label>
              <Field className="newUserItem" type="text" name="agama" />
            </div>
            <div>
              <label htmlFor="sts_kawin">Status Kawin</label>
              <Field className="newUserItem" type="text" name="sts_kawin" />
            </div>
            <div>
              <label htmlFor="pekerjaan">Pekerjaan</label>
              <Field className="newUserItem" type="text" name="pekerjaan" />
            </div>
            <div>
              <label htmlFor="kewarganegaraan">Kewarganegaraan</label>
              <Field className="newUserItem" type="text" name="kewarganegaraan" />
            </div>
            <br />
            <button className="newUserButton" type="submit">
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
