import { useState } from "react";
import Perfil from "../assets/perfil.jpg";
function About() {
  const [showSkills, setShowSkills] = useState(0);

  return (
    <div id="about" className="w-full flex flex-col  md:flex-row">
      <div className="rounded-lg bg-[#171F26] px-4 py-2">
        <div className="flex flex-row gap-4 ">
          <button
            onClick={() => setShowSkills(0)}
            className="w-full text-center bg-[#0C151D] px-6 py-3  rounded-lg text-sm text-[#A3ABB2]"
          >
            Portifolio
          </button>
          <button
            onClick={() => setShowSkills(1)}
            className="w-full bg-[#171F26] px-6 py-3 text-center rounded-lg text-sm text-[#A3ABB2]"
          >
            Skills
          </button>
        </div>
      </div>
      {showSkills === 0 ? (
        <div className="text-white">TESTE</div>
      ) : (
        <div className="text-white">skills</div>
      )}
    </div>
  );
}

export default About;
