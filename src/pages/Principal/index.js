// Global Styles
// import "typeface-catamaran"; // eslint-disable-line
//import "font-awesome/css/font-awesome.css";
//import "simple-line-icons/css/simple-line-icons.css";
//import "html5-device-mockups/dist/device-mockups.css";
import React from "react";

import PageLayout from "../../components/PageLayout";
import Masthead from "../../components/Masthead";
import Download from "../../components/Download";
import Features from "../../components/Features";
import CallToAction from "../../components/CallToAction";
import ContactUs from "../../components/ContactUs";
import Icon from "../../components/Icon";
import demoScreen from "./images/demo-screen-1.jpg";
import "./style.css";

const FEATURES = [
  {
    title: "Busca",
    description: "Lista para buscar tus restaurantes y menus favoritos!",
    icon: <Icon family="simple" name="screen-smartphone" />,
  },
  {
    title: "Uso Flexible",
    description: "Puedes usarlo en un dispositivo movil y de escritorio!",
    icon: <Icon family="simple" name="camera" />,
  },
  {
    title: "Comenta",
    description: "Deja tus comentarios!",
    icon: <Icon family="simple" name="present" />,
  },
  {
    title: "Califica",
    description:
      "Califica cada platilla y revisa las calificaciones que le han dado otros usuarios!",
    icon: <Icon family="simple" name="lock-open" />,
  },
];
const SECTIONS = [
  {
    title: "No mas PDF",
    id: "download",
  },
  {
    title: "Caracteristicas",
    id: "features",
  },
  {
    title: "Contacto",
    id: "contact",
  },
];
const SOCIAL_NETWORKS = [
  {
    id: "twitter",
    icon: <Icon family="fa" name="twitter" />,
    color: "#1da1f2",
    link: "#",
  },
  {
    id: "facebook",
    icon: <Icon family="fa" name="facebook" />,
    color: "#3b5998",
    link: "#",
  },
  {
    id: "google-plus",
    icon: <Icon family="fa" name="google-plus" />,
    color: "#dd4b39",
    link: "#",
  },
];

/**
 * The home page
 */
const HomePage = () => (
  <PageLayout sections={SECTIONS}>
    <Masthead
      text="Menu's World es una web app que te ayudara a tener una mejor experiencia online con los menu de tus restaurantes favoritos!"
      buttonLabel="Empieza ahora, busca  tu menu!"
      downloadLink="#download"
      demoScreen={demoScreen}
    />
    <Download
      title="Descubre una nueva manera de interactuar con tu menu!"
      subtitle="Ya no necesitaras descargar PDF o Imagenes para buscar tus platillos de forma digital!"
      googlePlayDownloadLink="#"
      appStoreDownloadLink="#"
    />
    <Features
      title="Caracteristicas ilimitadas, diversion ilimitada"
      subtitle="Revisa que puedes hacer en Menu's World!"
      features={FEATURES}
      demoScreen={demoScreen}
    />
    <CallToAction
      firstLine="Disfruta tus alimentos."
      secondLine="Comparte tu experiencia."
      buttonLabel="Empecemos!"
      buttonUrl="#contact"
    />
    <ContactUs socialNetworks={SOCIAL_NETWORKS} />
  </PageLayout>
);

export default HomePage;
