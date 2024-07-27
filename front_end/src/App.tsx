import ShowNotes from "./components/pages/ShowNotes";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UploadNote from "./components/pages/UploadNote";

function App() {
  return (
    <div>
      <Router>
        <Link to="/create"> create a post</Link>
        <Routes>
          <Route path="/" element={<ShowNotes />} />
          <Route path="/create" element={<UploadNote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
