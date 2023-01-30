import { createContext, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("Light")

    const values = {
        theme,
        setTheme,
    }

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

export default ThemeContext
