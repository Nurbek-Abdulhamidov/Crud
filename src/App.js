import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Table</h2>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route style={{ marginTop: 20 }} path="read" element={<Read />} />
        <Route path="update" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
