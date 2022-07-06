import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Form from "./pages/Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<p>Landing page</p>} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/formulario" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
