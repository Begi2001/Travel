import { Routes, Route } from "react-router-dom";
import First from "./components/FirstPage/First";
import Second from "./components/SecondPage/Second";
import Filtres2 from "./components/Filters2/Filter2";
import "./App.css";

function App() {
  return (
    <>
      {/* <Filtres2 /> */}
      <Routes>
        <Route path="/home" element={<First />} />
        <Route path="/excursion" element={<Second />} />
      </Routes>
    </>
  );
}

export default App;
