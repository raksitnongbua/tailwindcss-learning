// import '../styles/globals.css'
// import 'tailwindcss/tailwind.css';
import { CssBaseline, StyledEngineProvider } from '@material-ui/core';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Component {...pageProps} />
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
