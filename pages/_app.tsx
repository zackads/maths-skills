import type { AppProps } from "next/app";
import { MathJaxContext } from "better-react-mathjax";
import createEmotionCache from "../styles/theme/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import lightTheme from "../styles/theme/lightTheme";
import { Layout } from "../src/components/Layout";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MathJaxContext
      config={{
        loader: { load: ["input/asciimath"] },
      }}
    >
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={lightTheme}>
          <Layout>
            <CssBaseline />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </MathJaxContext>
  );
}

export default MyApp;
