import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Section() {

  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div>
      <br />
      <h1>Inactive theme is : {theme === "Light" ? "Dark" : "Light"}</h1>
    </div>
  )
}

export default Section
