import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import axios from "axios";
import ChoiseUser from "./pages/choiseUser";
import MainPanel from './pages/mainPanel'
import ChoiseAncet from './pages/choiseAncet'
function App() {
 

  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPanel}  exact/>
        <Route path="/ChoiseUser" component={ChoiseUser} />
        <Route path="/ChoiseAncet" component={ChoiseAncet} />
      </Switch>
    </Router>
  );
}

export default App;
