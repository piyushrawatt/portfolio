import { Routes, Route } from "react-router-dom";
import Main from "./components/Main"
import AllProjects from "./components/Allproject"
import Footer from "./components/Footer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/contact" element={<Footer/>}/>
    </Routes>
  );
}

export default App;