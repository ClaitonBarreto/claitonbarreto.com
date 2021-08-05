import React from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "src/globalStyle"
import { useTheme } from "src/context/Theme"
import {Theme} from "src/context/Theme"
import { dark, light } from 'src/themes'
import ThemeSwitcher from "src/components/ThemeSwitcher"
import { useEffect } from "react"
import { gql } from '@apollo/client'
import client from "./apollo-client"
import { GetStaticPathsResult, GetStaticProps } from "next"


interface RootProps {
    Component: React.ComponentType<any>
    pageProps: any
    infos?: any
}

const Root = (props:RootProps) => {

    const { Component, pageProps } = props


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