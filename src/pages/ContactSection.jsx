import ModeloPagina from "./ModeloPagina";

import iconLinkedin from "../assets/iconLinkedin.svg";
import iconGithub from "../assets/iconGithub.svg";
import iconEmail from "../assets/iconEmail.svg";

import "./ContactSection.css";

const ContactSection = () => {
  return (
    <ModeloPagina id="contact">
      <h1>Contato</h1>
      <p>
        Entre em contato comigo através do meu email ou LinkedIn. Mas caso
        queira dar uma olhada no meu <b>Github</b>, fique a vontade!
      </p>
      <br />
      <br />
      <br />
      <p className="iconsSocialsContainer">
        <a
          href="https://www.linkedin.com/in/pedro-henrique-salazar/"
          target="_blank"
          title="Ir para LinkedIn"
        >
          <img src={iconLinkedin} alt="Ícone para LinkedIn" />
        </a>
        <a
          href="https://github.com/PHSalazar"
          target="_blank"
          title="Ir para Github"
        >
          <img src={iconGithub} alt="Ícone para Github" />
        </a>
        <div>
          <img src={iconEmail} alt="Ícone para LinkedIn" />
          <span>ph.s.salazar@gmail.com</span>
        </div>
      </p>
    </ModeloPagina>
  );
};

export default ContactSection;
