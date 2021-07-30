import "./DataPendudukBaru.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Data Kependudukan Baru</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>NIK</label>
          <input type="text" placeholder="3273171207" />
        </div>
        <div className="newUserItem">
          <label>Nama</label>
          <input type="text" placeholder="Nuri" />
        </div>
        <div className="newUserItem">
          <label>Tempat Lahir</label>
          <input type="email" placeholder="Bandung" />
        </div>
        <div className="newUserItem">
          <label>Tanggal Lahir</label>
          <input type="password" placeholder="2001-07-01" />
        </div>
        <div className="newUserItem">
          <label>Alamat</label>
          <input type="text" placeholder="Kp. Sisi Barat 78" />
        </div>
        <div className="newUserItem">
          <label>Agama</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="muslim">Muslim</option>
            <option value="kristen">Kristen</option>
            <option value="katolik">Katolik</option>
            <option value="hindu">Hindu</option>
            <option value="buddha">Buddha</option>
            <option value="konghucu">Konghucu</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Status Kawin</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="kawin">Kawin</option>
            <option value="belum_kawin">Belum Kawin</option>
            <option value="cerai_hidup">Cerai Hidup</option>
            <option value="cerai_mati">Cerai Mati</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Pekerjaan</label>
          <input type="text" placeholder="Buruh" />
        </div>
        <div className="newUserItem">
          <label>Kewarganegaraan</label>
          <input type="text" placeholder="Indonesia" />
        </div>
        <div className="newUserItem">
          <label>Tanggal Pembuatan</label>
          <input type="text" placeholder="2018-07-01" />
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
