import { Routes, Route } from "react-router-dom";
import Navbar from "./components/FirstPage/Navbar/Navbar";
import First from "./components/FirstPage/First";
import Second from "./components/SecondPage/Second";
import "./App.css";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/home" element={<First />} />
        <Route path="/excursion" element={<Second />} />
      </Routes>
    </>
  );
}

export default App;
