import { useState } from "react";
import "./App.css";
import profileImg from "./assets/profileImg.jpeg";

function App() {
  const [count, setCount] = useState(0);
  const nameToAnimate = "Cinthya";

  return (
    <>
      <header>
        <img src={profileImg} alt="profile image" />

        <nav>
          <a href="#" className="btn-nav">
            Sobre mi
          </a>
          <a href="#" className="btn-nav">
            Experiencia
          </a>
          <a href="#" className="btn-nav">
            Proyectos
          </a>
          <a href="#" className="btn-nav">
            Contacto
          </a>
        </nav>
      </header>
      <main>
        <section className="landing">
          <h1 id="mainTitle">
            ¡Hola! Soy Cinthya Di Risio, <br />
            Desarrolladora Full-Stack
          </h1>
          <div className="socials">
            <a target="_blank" href="https://www.linkedin.com/in/cinthyadirisio">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
                  fill="#81689d"
                />
              </svg>
            </a>
            <a target="_blank" href="https://github.com/cinthyadirisio">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM7.5316 7.08431L7.53366 7.08355L7.53604 7.08267L7.54087 7.08091L7.55081 7.07737L7.57182 7.07025C7.58633 7.06549 7.60182 7.06074 7.6183 7.05608C7.65128 7.04675 7.68807 7.03782 7.72867 7.02994C8.20584 6.93729 9.0031 7.02006 10.1532 7.80058C10.1818 7.81993 10.2105 7.83971 10.2394 7.85992C10.2789 7.85029 10.3184 7.84099 10.3579 7.83202C11.4419 7.58611 12.5581 7.58611 13.6421 7.83202C13.6816 7.84099 13.7211 7.85028 13.7605 7.8599C13.7894 7.83969 13.8181 7.81993 13.8466 7.80058C14.9921 7.02276 15.7861 6.9371 16.2648 7.02957C16.3062 7.03756 16.3438 7.04667 16.3774 7.05621C16.3942 7.06098 16.41 7.06584 16.4248 7.07072L16.4462 7.07802L16.4564 7.08166L16.4613 7.08347L16.4637 7.08437L16.4649 7.08482L16.4661 7.08527C16.7354 7.1865 16.948 7.39879 17.0497 7.6679C17.0578 7.68938 17.0658 7.71087 17.0735 7.73236C17.3441 8.4823 17.4189 9.29796 17.297 10.0849C17.2897 10.1321 17.2816 10.1792 17.2729 10.2262C17.3025 10.2737 17.3312 10.3217 17.3591 10.3703C17.7894 11.1208 18.0102 11.9955 17.9996 12.8811C17.9985 14.7913 17.4961 16.151 16.5726 17.0527C15.6687 17.9353 14.517 18.2221 13.5643 18.3377L13.5629 18.3379C12.509 18.5143 11.488 18.5233 10.4308 18.366L10.4004 18.3619C9.45151 18.233 8.30946 17.9315 7.41451 17.0443C6.50083 16.1385 6.00148 14.7825 6.00036 12.8811C5.98983 11.9955 6.21063 11.1208 6.64093 10.3703C6.66873 10.3218 6.69739 10.2739 6.72693 10.2265C6.71815 10.1794 6.71008 10.1322 6.70271 10.0849C6.58079 9.30157 6.65298 8.48972 6.91854 7.74178C6.92686 7.71832 6.93539 7.69491 6.9441 7.67156C7.04549 7.39999 7.26002 7.18567 7.5316 7.08431Z"
                  fill="#81689d"
                />
              </svg>
            </a>
            <a target="_blank" href="mailto:cindy.fdb@hotmail.com">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="6"
                  width="18"
                  height="12"
                  rx="2"
                  stroke="#81689d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.5737 7L12 13L3.42635 7"
                  stroke="#81689d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="calltoAction">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="jumping"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z"
                fill="#FFD0EC"
              />
            </svg>
          </div>
        </section>
        <section>
          <div className="aboutText">
            <h2>Sobre mí</h2>
            <p>
              Soy una Desarrolladora y Mentora con base en Argentina. Mi ingreso
              al mundo IT fue tardío pero apasionado, pues me llevo a completar
              un bootcamp intensivo donde aprendi muchas Tecnologías, me adecue
              a las Metodologías Ágiles y trabajé en equipo para crear proyectos
              reales. <br />
              Al terminar, formé parte de un equipo voluntario y me desempeñé
              como Tutora/Mentora de Desarrollo. <br />
              Actualmente estoy en búsqueda de nuevas oportunidades para mejorar
              mis habilidades y colaborar en nuevos proyectos.
            </p>
          </div>
        </section>
        <section>
          <h2>Experiencia</h2>
          <article>
            <h4>MindHub LA</h4>
            <div className="cursos">
              <h5>Mentora Junior Frontend</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, nisi corporis quos deleniti, facere minima impedit,
                illo non at nostrum ut? Vel aspernatur totam, error asperiores
                exercitationem sapiente rem temporibus!
              </p>
            </div>
            <div className="cursos">
              <h5>Mentora Junior MERN</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                labore fugiat officia non sit quos blanditiis enim, dicta quidem
                adipisci consequatur, ducimus, impedit porro pariatur
                consectetur accusamus facilis saepe deleniti?
              </p>
            </div>
          </article>
          <article>
            <h4>CoderHouse</h4>
            <div className="cursos">
              <h5>Tutora Regular Backend</h5>
              <ul>
                <li></li>
              </ul>
            </div>
          </article>
          <article></article>
        </section>
        <section></section>
      </main>
      <footer>
        <div className="mainFooterText">
          <p>
            Hecho con
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.7639 3.68739 14.5983 3.88249 12.5404 6.02065C12.399 6.16754 12.2039 6.25054 12 6.25054C11.7961 6.25054 11.601 6.16754 11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z"
                fill="#FFD0EC"
              />
            </svg>
            (and React) by Cinthya Di Risio
          </p>
        </div>
        <div className="scrollToTop">
          <a href="#mainTitle">Clickeame para volver al principio</a>
        </div>
      </footer>
    </>
  );
}

export default App;