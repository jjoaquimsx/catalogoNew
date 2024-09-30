import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homeScreen/home.jsx";
import "./App.css"
import PageFem from "./components/photopages/index.jsx";

function App() {
  return (
    <>
      <Router basename="/catalogoNew">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalogoFeminino" element={<PageFem></PageFem>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
