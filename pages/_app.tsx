import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import store from '@/store'

const theme = createTheme()

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer
        position="bottom-right"
        hideProgressBar
        pauseOnHover={false}
        theme="colored"
      />
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
)

export default App
