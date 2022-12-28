import { Routes, Route } from "react-router-dom";
import First from "./components/FirstPage/First";
import Second from "./components/SecondPage/Second";
import Filters2 from "./components/Filters2/Filter2";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<First />} />
        <Route path="/excursion" element={<Second />} />
      </Routes>
    </>
  );
}

export default App;
