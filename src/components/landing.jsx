import Perfil from "../assets/perfil.jpg";
import Git from "../assets/github.svg";
import Linkedas from "../assets/linkedin.svg";
import Twitter from "../assets/tt.svg";
function Landing() {
  return (
    <section className="font-bold h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-6 md:gap-6 md:flex-row">
        <div className="rounded-full overflow-hidden ">
          <div className="max-w-[250px] mx-auto">
            <img
              src={Perfil}
              className="rounded-full object-cover w-full h-full border-4 border-[#FFE071]"
              alt="Pefil"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-white p-2">Hugo Silva Sodré</h1>
          <p className="text-[#A3ABB2]">Software Engineer</p>
        </div>

        <div className="flex flex-row items-center justify-center gap-6">
          <a href="https://github.com/Hugo-Sodre " target="_blank">
            <img src={Git} alt="github image" />
          </a>
          <a
            href="https://www.linkedin.com/in/hugo-silva-sodr%C3%A9-4495b3207/"
            target="_blank"
          >
            <img src={Linkedas} alt="Linkedin image" />
          </a>
          <a href="#">
            <img src={Twitter} alt="Twitter image" target="_blank" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Landing;
