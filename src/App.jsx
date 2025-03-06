import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
