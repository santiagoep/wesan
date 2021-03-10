import { ThemeProvider } from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css';

import themes from '../config/theme'
import GlobalStyle from '../components/GlobalStyle/GlobalStyle';





export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themes.lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
