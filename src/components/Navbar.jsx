import "./Navbar.css";
import iconHome from "../assets/iconHome.svg";
import iconAboutMe from "../assets/iconUser.svg";
import iconProjects from "../assets/iconProjects.svg";
import iconContact from "../assets/iconContact.svg";

const Navbar = () => {
  return (
    <div className="navbar-aside">
      <ul id="menu-navbar">
        <li>
          <a href="#home">
            <img src={iconHome} alt="Icone Início" className="iconNavbar" />
            <span>Início</span>
          </a>
        </li>
        <li>
          <a href="#aboutme">
            <img
              src={iconAboutMe}
              alt="Icone Sobre mim"
              className="iconNavbar"
            />
            <span>Sobre mim</span>
          </a>
        </li>
        <li>
          <a href="#projects">
            <img
              src={iconProjects}
              alt="Icone Projetos"
              className="iconNavbar"
            />
            <span>Projetos</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <img src={iconContact} alt="Icone Contato" className="iconNavbar" />
            <span>Contato</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
