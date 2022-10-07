import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getIsUserAdmin = () =>{
    const tipoDeUsuario = cookies.get("TipoUsuario");
    return tipoDeUsuario === "Administrador de restaurante" 
}

export const getIsLogeddIn = () =>{
    const nameUser = cookies.get("Usuario");
    return nameUser && nameUser !== ""; 
}

export const getRestaurantName = () => {
    const restaurant = cookies.get("NombreResturante");
    return restaurant;
}