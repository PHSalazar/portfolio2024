import "./ProjectCard.css";

import noImage from "../../assets/noImage.png";

const ProjectCard = ({ projectObject }) => {
  const formatTitle = (title) => {
    return title.replace(/\-/g, " ").toUpperCase();
  };

  return (
    <div className="card">
      <img
        src={`public/screenshots/${projectObject.name}.png`}
        alt="Thumb do projeto"
        className="thumbProject"
        onError={(e) => (e.target.src = noImage)}
      />
      <div>
        <h3 className="titleProject">{formatTitle(projectObject.name)}</h3>
        <p className="DescriptionProject">
          {projectObject.description || "Sem descrição."}
        </p>

        <section className="footerCard">
          <a href={projectObject.html_url} target="_blank">
            Ver Repo
          </a>
          <a
            href={`https://phsalazar.github.io/${projectObject.name}`}
            target="_blank"
          >
            Ver Demo
          </a>
        </section>
      </div>
    </div>
  );
};

export default ProjectCard;
