import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Header() {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
            <br /><br /><br /><br /><br />
            <h1>Active theme is : {theme}</h1>
            <br />
            <button onClick={() => { setTheme(theme === "Light" ? "Dark" : "Light") }}>Change Theme</button>
        </div>
    )
}

export default Header
