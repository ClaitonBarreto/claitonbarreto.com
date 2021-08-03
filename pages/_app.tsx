import { useContext, useEffect } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import AppContext, { Context, Theme } from 'src/context/Theme'
import GlobalStyle from '../src/globalStyle'
import { dark,light } from '../src/themes'

export default function App({ Component, pageProps }) {

  const { theme, setTheme } = useContext(Context)

  setTheme(Theme.dark)

  return (
    <>
      <AppContext>
        <ThemeProvider theme={theme === Theme.light ? light : dark}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppContext>
    </>
  )
}
