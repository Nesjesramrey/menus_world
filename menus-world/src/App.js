import { Routes, Route } from "react-router-dom";
import "./App.css";

//Containers
import MenuContainer from "./containers/MenuContainer";

//Components
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Entries from "./pages/Entries";
import Salads from "./pages/Salads";
import Soup from "./pages/Soup";
import Fish from "./pages/Fish";
import Snacks from "./pages/Snacks";
import MeatCut from "./pages/Meat_cut";
import DrinksNoAlc from "./pages/DrinksNoAlc";
import DrinksAlc from "./pages/DrinksAlc";
import Desserts from "./pages/Desserts";
import Form from "./pages/Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuContainer />}>
          <Route index element={<Menu />} />
          <Route path="entradas" element={<Entries />} />
          <Route path="ensaladas" element={<Salads />} />
          <Route path="sopas" element={<Soup />} />
          <Route path="pescados" element={<Fish />} />
          <Route path="snacks" element={<Snacks />} />
          <Route path="cortes" element={<MeatCut />} />
          <Route path="bebidasnoalcoholicas" element={<DrinksNoAlc />} />
          <Route path="bebidasalcoholicas" element={<DrinksAlc />} />
          <Route path="postres" element={<Desserts />} />
        </Route>
        <Route path="/formulario" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
