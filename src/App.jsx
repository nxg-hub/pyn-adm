import { Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import SignUp from "./pages/Signup";
import Users from "./pages/Dashboard/routes/users/Users";
import Accounts from "./pages/Dashboard/routes/Accounts/Accounts";
import Home from "./pages/Dashboard/routes/Home/Home";
import Dashboard from "./pages/Dashboard/Index";
import AdminInvite from "./pages/Dashboard/routes/admin-invite/admin-invite";
import CompleteReg from "./pages/complete-reg";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/CompleteReg" element={<CompleteReg />} />
         <Route exact path="/Dashboard" element={<Dashboard />}>
          <Route path="/Dashboard" element={<Home />} />
          <Route path="/Dashboard/Users" element={<Users />} />
          <Route path="/Dashboard/Accounts" element={<Accounts />} />
          <Route path="/Dashboard/AdminInvite" element={<AdminInvite />}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
