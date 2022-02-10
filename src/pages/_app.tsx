import type { AppProps } from "next/app";
import Head from "next/head";
import { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyles } from "twin.macro";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useMemo(() => {
    return new QueryClient();
  }, []);

  return (
    <>
      <Head>
        <title>User Groups</title>
        <GlobalStyles />
      </Head>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
