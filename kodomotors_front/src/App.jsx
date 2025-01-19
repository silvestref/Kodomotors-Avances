import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import HomeNew from "./pages/HomeNew";

import SignUp from "./pages/SignUp";
import Main from "./components/layout/Main";
import "antd/dist/antd.min.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import ForgotPassword from "./features/auth/components/ForgotPassword";
import VerifyEmail from "./features/auth/components/VerifyEmail";
import Login from "./features/auth/components/login.jsx";
import NewPassword from "./features/auth/components/NewPassword";
import PasswordUpdated from "./features/auth/components/PasswordUpdated";
import Logout from "./pages/Logout";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={Login} />
        <Route path="/ForgotPassword" exact component={ForgotPassword} />
        <Route path="/VerifyEmail" exact component={VerifyEmail} />
        <Route path="/NewPassword" exact component={NewPassword} />
        <Route path="/password-updated" exact component={PasswordUpdated} />
        {/* <Route path="/prueba" exact component={HomeNew} /> */}
       
        {/* solo para probar */}
        <Route path="/" exact component={Login} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          
          <Route exact path="/mensajes"  component={HomeNew} />
          <Route exact path="/logout"  component={Logout} />
          <Redirect from="*" to="/dasboard" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
