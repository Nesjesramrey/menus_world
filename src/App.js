import { Routes, Route } from "react-router-dom";

//Containers
import MenuContainer from "./containers/MenuContainer";

//Components
import HomePage from "./pages/Principal";
import FAQPage from "./pages/FAQ";
import Home from "./pages/Home";
import Menu from "./pages/Menu/General";
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
import Form from "./pages/Form";
import Detail from "./pages/Detail";
import Restaurants from "./pages/Restaurants";

function App() {
  return (
    <div className="App">
      {/* <QRCode value="www.facebook.com" size={200} bgColor="#282c34" fgColor="#fff" level="H" /> */}
      <Routes>
        <Route path="/" element={<Home />} />
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
        </Route>
        <Route path="/formulario" element={<Form />} />
        <Route path="/detalle" element={<Detail />} />
        <Route path="/detalle/:dishId" element={<Detail />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/principal" element={<HomePage />} />
        <Route path="/faq" element={FAQPage} />
      </Routes>
    </div>
  );
}

export default App;
