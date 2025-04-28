import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Publications from "./pages/Publications";
import Members from "./pages/Members";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './pages/Projects';
import Join from './pages/Join';

function App() {
  return (
    <Router basename="/brown_lab">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/members" element={<Members />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
