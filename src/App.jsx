import "./App.css";
import About from "./components/about";
import Landing from "./components/landing";
import Menu from "./assets/list.svg";

import { useRef, useState } from "react";
import { useEffect } from "react";
import Footer from "./components/footer";

function App() {
  const dropDrownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const onClick = () => setIsActive(!isActive);
  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto md:w-[70%]">
        <header
          className="
            absolute w-[90%] h-16 mx-auto
            md:w-[70%]
            flex
            flex-row
          "
        >
          <div className="md:hidden">
            <button onClick={onClick} className="menu-button">
              <span>Menu</span>
              <img src={Menu} alt="botão menu" className="" />
            </button>
          </div>
          <nav
            ref={dropDrownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              <li>
                <a href="#">Sobre mim</a>
              </li>
              <li>
                <a href="#">Experiência</a>
              </li>
              <li>
                <a href="#">Formação</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-col gap-6">
          <Landing />
          <About />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
