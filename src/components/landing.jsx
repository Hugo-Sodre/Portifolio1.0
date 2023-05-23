import Perfil from "../assets/perfil.jpg";
import Teste from "../assets/career.svg";
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
      </div>
    </section>
  );
}

export default Landing;
