import { Routes, Route } from "react-router-dom";

import "./App.css";

import Form from "./pages/Form";
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<p>Landing page</p>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/formulario" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
