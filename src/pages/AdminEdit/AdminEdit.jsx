import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import "./AdminEdit.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Data Penduduk</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUserNama">Anna Becker</span>
              <span className="userShowUserPekerjaan">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <h3>NIK : </h3>
              <span className="userShowUserNIK">31251253</span>
            </div>
            <div className="userShowInfo">
              <h3>Tempat Lahir : </h3>
              <span className="userShowUserTempatLahir">Bandung</span>
            </div>
            <div className="userShowInfo">
              <h3>Tanggal Lahir : </h3>
              <span className="userShowUserTanggalLahir">2001-09-19</span>
            </div>
            <div className="userShowInfo">
              <h3>Alamat : </h3>
              <span className="userShowUserAlamat">Jl. kampung biru 3</span>
            </div>
            <div className="userShowInfo">
              <h3>Agama : </h3>
              <span className="userShowUserAgama">Islam</span>
            </div>
            <div className="userShowInfo">
              <h3>Status Kawin : </h3>
              <span className="userShowUserStatusKawin">Kawin</span>
            </div>
            <div className="userShowInfo">
              <h3>Kewarganegaraan : </h3>
              <span className="userShowUserKewarganegaraan">Indonesia</span>
            </div>
            <div className="userShowInfo">
              <h3>Tanggal Pembuatan : </h3>
              <span className="userShowUserTanggalPembuatan">2019-09-18</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>NIK</label>
                <input
                  type="text"
                  placeholder="31251253"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Nama</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Tempat Lahir</label>
                <input
                  type="text"
                  placeholder="Bandung"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Tanggal Lahir</label>
                <input
                  type="text"
                  placeholder="2001-09-19"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Alamat</label>
                <input
                  type="text"
                  placeholder="Jl. kampung biru 3"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Agama</label>
                <input
                  type="text"
                  placeholder="Islam"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Pekerjaan</label>
                <input
                  type="text"
                  placeholder="Software Engineer"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Status Kawin</label>
                <input
                  type="text"
                  placeholder="Kawin"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Kewarganegaraan</label>
                <input
                  type="text"
                  placeholder="Indonesia"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Tanggal Pembuatan</label>
                <input
                  type="text"
                  placeholder="2019-09-18"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
