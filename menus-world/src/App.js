import { Routes, Route } from "react-router-dom";
import "./App.css";

//Containers
import MenuContainer from "./containers/MenuContainer";

//Components
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Form from "./pages/Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuContainer />}>
          <Route index element={<Menu />} />
        </Route>
        <Route path="/formulario" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
