import Perfil from "../assets/perfil.jpg";
import Git from "../assets/github.svg";
import Linkedas from "../assets/linkedin.svg";
import Twitter from "../assets/tt.svg";
import Dowload from "../assets/vector4.svg";
function Landing() {
  return (
    <section className="font-bold h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-6 md:gap-6 md:flex-row">
        <div className="flex flex-col md:flex-row">
          <div className="rounded-full overflow-hidden ">
            <div className="max-w-[250px] mx-auto">
              <img
                src={Perfil}
                className="rounded-full object-cover w-full h-full border-4 border-[#FFE071]"
                alt="Pefil"
              />
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <h1 className="text-2xl text-white p-2">Hugo Silva Sodré</h1>
            <p className="text-[#A3ABB2]">Front end developer</p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-6">
          <a href="https://github.com/Hugo-Sodre " target="_blank">
            <img src={Git} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/hugo-silva-sodr%C3%A9-4495b3207/"
            target="_blank"
          >
            <img src={Linkedas} alt="Linkedin" />
          </a>
          <a href="#" target="_blank">
            <img src={Twitter} alt="Twitter" />
          </a>
        </div>

        <div className="flex flex-row gap-4 ">
          <button className=" flex gap-2 items-center bg-secundary px-6 py-3  rounded-lg text-sm text-[#3D3D3D]">
            Dowload CV{" "}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            </div>
          </button>
          <button className="bg-[#171F26] px-6 py-3  rounded-lg text-sm text-[#A3ABB2]">
            <a
              href="https://www.linkedin.com/in/hugo-silva-sodr%C3%A9-4495b3207/"
              target="_blank"
            >
              Contato
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Landing;
