import { Routes, Route } from "react-router-dom";
import "./App.css";

//Containers
import MenuContainer from "./containers/MenuContainer";

//Components
import Home from "./pages/Home";
import Login from "./pages/Login";

import Menu from "./pages/Menu";
import Entries from "./pages/Menu/Entries";
import Salads from "./pages/Menu/Salads";
import Soup from "./pages/Menu/Soup";
import Fish from "./pages/Menu/Fish";
import Snacks from "./pages/Menu/Snacks";
import MeatCut from "./pages/Menu/Meat_cut";
import DrinksNoAlc from "./pages/Menu/DrinksNoAlc";
import DrinksAlc from "./pages/Menu/DrinksAlc";
import Desserts from "./pages/Menu/Desserts";
import MenuEdit from "./pages/Menu/Edit";
import DishDelete from "./pages/Menu/Delete";
import Form from "./pages/Form";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      {/* <QRCode value="www.facebook.com" size={200} bgColor="#282c34" fgColor="#fff" level="H" /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/menu/:restaurantName" element={<MenuContainer />}>
          <Route index element={<Menu />} />
          <Route path="entradas/:restaurantName" element={<Entries />} />
          <Route path="ensaladas/:restaurantName" element={<Salads />} />
          <Route path="sopas/:restaurantName" element={<Soup />} />
          <Route path="pescados/:restaurantName" element={<Fish />} />
          <Route path="snacks/:restaurantName" element={<Snacks />} />
          <Route path="cortes/:restaurantName" element={<MeatCut />} />
          <Route
            path="bebidasnoalcoholicas/:restaurantName"
            element={<DrinksNoAlc />}
          />
          <Route
            path="bebidasalcoholicas/:restaurantName"
            element={<DrinksAlc />}
          />
          <Route path="postres/:restaurantName" element={<Desserts />} />
          <Route path="edit/:id" element={<MenuEdit />} />
          <Route path="delete/:id" element={<DishDelete />} />
        </Route>
        <Route path="/formulario" element={<Form />} />
        <Route path="/detalle" element={<Detail />} />
        <Route path="/detalle/:dishId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
