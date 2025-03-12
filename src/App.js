import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Publications from "./pages/Publications";
import Members from "./pages/Members";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router basename="/brown_lab">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </Router>
  );
}

export default App;
