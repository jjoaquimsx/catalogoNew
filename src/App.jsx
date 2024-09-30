import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homeScreen/home.jsx";
import "./App.css"
import PageFem from "./components/photopages/index.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogoFeminino" element={<PageFem />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
