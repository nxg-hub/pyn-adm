import { Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import SignUp from "./pages/Signup";
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
