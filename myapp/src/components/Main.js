import React from 'react'
import Header from './Header'
import Section from './Section'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Main() {

    const theme = useContext(ThemeContext)
    const className = theme.theme

    return (
        <div className={className}>
            <Header />
            <Section />
        </div>
    )
}

export default Main
