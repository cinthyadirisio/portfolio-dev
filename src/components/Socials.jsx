import React from 'react'
import MailSVG from './svg/MailSVG'
import GitHubSVG from './svg/GitHubSVG'
import LinkedIn from './svg/LinkedIn'

function Socials() {
  return (
    <div className="socials">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/cinthyadirisio"
            >
              <LinkedIn/>
            </a>
            <a target="_blank" href="https://github.com/cinthyadirisio">
              <GitHubSVG/>
            </a>
            <a target="_blank" href="mailto:cindy.fdb@hotmail.com">
              <MailSVG/>
            </a>
          </div>
  )
}

export default Socials