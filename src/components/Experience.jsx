import React from 'react'

function Experience() {
  return (
    <section className="xp">
    <h2>Experiencia</h2>
    <article>
      <h4>MindHub LA</h4>
      <div className="cursos">
        <h5>Mentora Junior Frontend</h5>

        <ul>
          <li>Dictar workshops en vivo, respondiendo consultas.</li>
          <li>Brindar apoyo y motivación a los alumnos.</li>
          <li>
            Idear actividades y corregir entregables, brindando feedback
          </li>
        </ul>
        <code>HTML5, CSS3, JavaScript, Bootstrap</code>
      </div>
      <div className="cursos">
        <h5>Mentora Junior MERN</h5>
        <ul>
          <li>
            Apoyar al docente en las clases y resolver problemas y
            consultas.
          </li>
          <li>Corregir entregables y entregar feedback al alumno.</li>
          <li>
            Aportar material de estudio, documentación y ayuda al
            alumno.
          </li>
        </ul>
        <code>React.js, Node.js, Tailwind, Redux</code>
      </div>
    </article>
    <article>
      <h4>CoderHouse</h4>
      <div className="cursos">
        <h5>Tutora Regular Backend</h5>
        <ul>
          <li>
            Apoyar al docente en las clases y resolver problemas y
            consultas.
          </li>
          <li>Corregir entregables y entregar feedback al alumno.</li>
          <li>
            Aportar material de estudio, documentación y ayuda al
            alumno.
          </li>
        </ul>
        <code>File System, Node.js, API Rest, MongoDB, SQL</code>
      </div>
    </article>
    <article>
      <h4>Voluntariado</h4>
    </article>
  </section>
  )
}

export default Experience