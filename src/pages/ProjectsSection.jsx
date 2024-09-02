import ProjectCard from "../components/ProjectCard/ProjectCard";
import ModeloPagina from "./ModeloPagina";

import axios from "axios";

import "./ProjectsSection.css";
import { useEffect } from "react";
import { useState } from "react";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchAPIGithub = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/phsalazar/repos",
          { responseType: "json" }
        );
        const data = response.data;
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAPIGithub();
  }, []);

  return (
    <ModeloPagina id="projects">
      <h1>Projetos</h1>
      <p>
        Aqui estão alguns dos meus projetos que criei durante o meu aprendizado.
      </p>

      <section className="projects-container">
        {projects.map((project) => (
          <ProjectCard projectObject={project} key={project.id} />
        ))}
      </section>
    </ModeloPagina>
  );
};

export default ProjectsSection;
