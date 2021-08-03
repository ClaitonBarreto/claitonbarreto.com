import React from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "src/globalStyle"
import { useTheme } from "src/context/Theme"
import {Theme} from "src/context/Theme"
import { dark, light } from 'src/themes'
import ThemeSwitcher from "src/components/ThemeSwitcher"



const Root = ({Component, pageProps}:{Component, pageProps}) => {

    const { theme } = useTheme()

    return (
        <ThemeProvider theme={theme === Theme.light ? light : dark}>
            <GlobalStyle />
            <ThemeSwitcher />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default Root