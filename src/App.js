import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/ListDataPenduduk/ListDataPenduduk";
import User from "./pages/AdminEdit/AdminEdit";
import EditDataSaya from "./pages/EditDataSaya/EditDataSaya";
import NewUser from "./pages/DataPendudukBaru/DataPendudukBaru";
import UserList1 from "./pages/ListDataLembagaMedis/ListDataLembagaMedis";
import UserList2 from "./pages/ListDataLembagaKepolisian/ListDataLembagaKepolisian";
import UserList3 from "./pages/ListDataLembagaPendidikan/ListDataLembagaPendidikan";
import UserList4 from "./pages/ListDataLembagaKeuangan/ListDataLembagaKeuangan";
import UserListdanKeuangan from "./pages/ListDataPendudukDanKeuangan/ListDataPendudukDanKeuangan";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ListDataPenduduk">
            <UserList />
          </Route>
          <Route path="/ListDataPendudukDanKeuangan">
            <UserListdanKeuangan />
          </Route>
          <Route path="/ListDataLembagaMedis">
            <UserList1 />
          </Route>
          <Route path="/ListDataLembagaKepolisian">
            <UserList2 />
          </Route>
          <Route path="/ListDataLembagaPendidikan">
            <UserList3 />
          </Route>
          <Route path="/ListDataLembagaKeuangan">
            <UserList4 />
          </Route>
          <Route path="/EditDataSaya/:NIK">
            <EditDataSaya />
          </Route>
          <Route path="/AdminEdit/:NIK">
            <User />
          </Route>
          <Route path="/DataPendudukBaru">
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
