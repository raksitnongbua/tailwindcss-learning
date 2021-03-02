// import '../styles/globals.css'
// import 'tailwindcss/tailwind.css';
import {
  createMuiTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@material-ui/core';
import '../styles/tailwind.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../stores';

const store = createStore(rootReducer);
function MyApp({ Component, pageProps }) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#02d667',
        dark: '#109c53',
        contrastText: '#ffcc00',
      },
      type: 'dark',
    },
  });
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Component {...pageProps} />
          </StyledEngineProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
