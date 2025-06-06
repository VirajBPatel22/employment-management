import "./App.css";
import Addemployee from "./components/Addemployee";
import Updateemployee from "./components/Updateemployee";
import Employeelist from "./components/Employeelist";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Employeelist />} />
        <Route path="/addemployee" element={<Addemployee />} />
        <Route path="/editemployee/:id" element={<Updateemployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

