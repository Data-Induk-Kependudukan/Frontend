import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/ListDataPenduduk/ListDataPenduduk";
import User from "./pages/AdminEdit/AdminEdit";
import EditDataSaya from "./pages/EditDataSaya/EditDataSaya";
import NewUser from "./pages/DataPendudukBaru/DataPendudukBaru";

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
          <Route path="/EditDataSaya/:userId">
            <User />
          </Route>
          <Route path="/AdminEdit/:userId">
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
