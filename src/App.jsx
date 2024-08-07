import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
