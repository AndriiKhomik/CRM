import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Login from "../../Pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
