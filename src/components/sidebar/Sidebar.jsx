import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Add,
  MailOutline,
  Edit
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Data Penduduk</h3>
          <ul className="sidebarList">
            <Link to="/EditDataSaya/1" className="link">
              <li className="sidebarListItem">
                <Edit className="sidebarIcon" />
                Edit Data Saya
              </li>
            </Link>
            <Link to="/ListDataPenduduk" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                List Data Penduduk
              </li>
            </Link>
            <Link to="/DataPendudukBaru" className="link">
              <li className="sidebarListItem">
                <Add className="sidebarIcon" />
                Tambah Data Penduduk
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Update Request
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
