import Typewriter from 'typewriter-effect'
import React from 'react'
import ThemeToggler from './ThemeToggler'
import { useGradContext } from '../context'

const Header = () => {
  const { setTheme } = useGradContext()
  return (
    <>
      <nav className="navbar">
        <div className="ba-logo">
          <img src="bilgeadam-technologies-logo.png" alt="bilge-adam-logo" />
        </div>
        <div className="navbar-buttons">
          <button>Language</button>

          <ThemeToggler />
        </div>
      </nav>
      <div>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('BilgeAdam Academy Students')
              .pauseFor(2500)
              .deleteChars(8)
              .typeString('Developers')
              .pauseFor(2500)
              .start()
          }}
        />
        <h2 className="class-code">- 3507 -</h2>
      </div>
    </>
  )
}
export default Header
