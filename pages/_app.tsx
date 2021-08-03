import AppContext from 'src/context/Theme'
import Root from '../src/root'

export default function App({ Component, pageProps }) {

  return (
    <AppContext>
      <Root Component={Component} pageProps={pageProps}/>
    </AppContext>
  )
}
