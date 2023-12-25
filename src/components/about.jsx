import { useState } from "react";
import Perfil from "../assets/perfil.jpg";

// Componente de Card para os Projetos
const ProjectCard = ({ project }) => (
  <div className="bg-[#2C394B] p-4 rounded-lg mb-4">
    <h3 className="text-white text-lg font-bold">{project.name}</h3>
    <p className="text-gray-300">{project.description}</p>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline mt-2"
    >
      Saiba mais
    </a>
  </div>
);

function About() {
  const [showSkills, setShowSkills] = useState(true);

  const skills = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
  ];

  const projects = [
    {
      name: "Consulta CEP",
      description: "Site feito para que consulte o cep utilizando API do via cep",
      link: "https://github.com/Hugo-Sodre/projetosJS",
    },
    {
      name: "Projeto 2",
      description: "Descrição do Projeto 2",
      link: "https://example.com/project2",
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <div id="about" className="w-full flex flex-col items-center">
      <div className="rounded-lg bg-[#171F26] px-4 py-2 md:w-2/4 mx-auto mb-4">
        <div className="flex flex-row gap-4">
          <button
            className={
              showSkills
                ? "w-full bg-secundary px-6 py-3 text-center rounded-lg text-sm text-[#3D3D3D]"
                : "w-full text-center bg-[#0C151D] px-6 py-3 rounded-lg text-sm text-[#A3ABB2]"
            }
            onClick={() => setShowSkills(false)}
          >
            Projetos
          </button>

          <button
            onClick={() => setShowSkills(true)}
            className={
              showSkills
                ? "w-full bg-[#171F26] px-6 py-3 text-center rounded-lg text-sm text-[#A3ABB2]"
                : "w-full bg-secundary px-6 py-3 text-center rounded-lg text-sm text-[#3D3D3D]"
            }
          >
            Skills
          </button>
        </div>
      </div>

      {showSkills ? (
        <div className="flex flex-row flex-wrap justify-center mt-5 gap-6">
          {skills.map((skill, index) => (
            <img
              key={index}
              src={skill.icon}
              className="w-16 md:w-32 lg:w-48"
              alt={skill.name}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-5 p-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default About;
