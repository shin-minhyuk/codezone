import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>

      {/* <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes> */}
    </>
  );
}

export default App;
