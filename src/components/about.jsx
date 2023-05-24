import { useState } from "react";
import Perfil from "../assets/perfil.jpg";
function About() {
  const [showSkills, setShowSkills] = useState(1);

  return (
    <div id="about" className="w-full flex flex-col mx-auto  ">
      <div className="rounded-lg bg-[#171F26] px-4 py-2 md:w-2/4 mx-auto">
        <div className="flex flex-row gap-4 ">
          <button
            className={
              showSkills === 0
                ? "w-full bg-secundary px-6 py-3 text-center rounded-lg text-sm text-[#3D3D3D]"
                : "w-full text-center bg-[#0C151D] px-6 py-3  rounded-lg text-sm text-[#A3ABB2]"
            }
            onClick={() => setShowSkills(0)}
          >
            Projetos
          </button>
          <button
            onClick={() => setShowSkills(1)}
            className={
              showSkills === 0
                ? "w-full bg-[#171F26] px-6 py-3 text-center rounded-lg text-sm text-[#A3ABB2]"
                : "w-full bg-secundary px-6 py-3 text-center rounded-lg text-sm text-[#3D3D3D]"
            }
          >
            Skills
          </button>
        </div>
      </div>
      {showSkills === 0 ? (
        <div className="text-white"></div>
      ) : (
        <div className="t flex flex-row flex-wrap justify-center mt-5 gap-6">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            className="w-16 md:w-32 lg:w-48"
            alt="html5"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            className="w-16 md:w-32 lg:w-48"
            alt="tailwindcss"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            className="w-16 md:w-32 lg:w-48"
            alt="react"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
            className="w-16 md:w-32 lg:w-48"
            alt="nodejs"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            className="w-16 md:w-32 lg:w-48"
            alt="javascript"
          />
        </div>
      )}
    </div>
  );
}

export default About;
