import { ThemeProvider } from '@mui/styles'
import type { AppProps } from 'next/app';
import '../styles/style.css'

import lightTheme from '../styles/theme/lighthem';
import { CssBaseline } from '@mui/material';
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}