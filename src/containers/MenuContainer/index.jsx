import { Outlet } from "react-router-dom";

//CSS
import "./MenuContainer.css";

//Components
import NavBar from "../../../src/components/NavBar";
import ButtonsMenu from "../../components/ButtonsMenu";

//Authorization
import { getIsUserAdmin, getIsLogeddIn } from "../../Auth/auth";

export default function MenuContainer() {
  const isAdmin = getIsUserAdmin();
  const isLogeddIn = getIsLogeddIn();

  return (
    <div className="container-welcome  col-12">
      <NavBar isAdmin={isAdmin} isLogeddIn={isLogeddIn} />
      <div className="content-button-container">
        <ButtonsMenu />
      </div>
      <Outlet />
    </div>
  );
}
