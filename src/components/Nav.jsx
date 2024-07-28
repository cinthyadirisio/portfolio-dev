import React from 'react'
import LinkNavTop from './LinkNavTop'

function Nav() {
  return (
    <nav>
        <LinkNavTop text={'Sobre mi'} href={'#'} />
        <LinkNavTop text={'Experiencia'} href={'#'} />
        <LinkNavTop text={'Proyectos'} href={'#'} />
        <LinkNavTop text={'Contacto'} href={'#'} />

          {/* <a href="#" className="btn-nav">
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
          </a> */}
        </nav>
  )
}

export default Nav