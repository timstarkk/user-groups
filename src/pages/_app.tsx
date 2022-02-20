import type { AppProps } from "next/app";
import Head from "next/head";
import { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyles } from "twin.macro";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ReactQueryDevtools } from 'react-query/devtools'

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
        <DndProvider backend={HTML5Backend}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </DndProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
