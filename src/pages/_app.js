import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../../theme/theme";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Up Your Work</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Up Your Work description" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, viewport-fit=cover"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
