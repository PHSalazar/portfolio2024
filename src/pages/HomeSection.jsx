import ModeloPagina from "./ModeloPagina";

import imageProfile from "../assets/imageProfile.png";

import "./HomeSection.css";

const HomeSection = () => {
  return (
    <ModeloPagina id="home">
      <h1>Início</h1>
      <p className="cardProfile">
        <img
          src={imageProfile}
          alt="Imagem de Perfil"
          className="imageProfile"
        />
        <div>
          <h2>Pedro Henrique Salazar</h2>
          <h3>Densenvolvedor Front-End</h3>
        </div>
      </p>
    </ModeloPagina>
  );
};

export default HomeSection;
