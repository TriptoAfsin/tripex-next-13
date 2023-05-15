// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import NextNProgress from "nextjs-progressbar";
import { store } from "@/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const config = {
  initialColorMode: "dark",
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("white", "#18181a")(props),
        color: mode("black", "#f3f3f4")(props),
      },
    }),
  },
};

const theme = extendTheme({
  config,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <NextNProgress color="#2d2f33" />
            {children}
          </ChakraProvider>
        </Provider>
      </QueryClientProvider>
    </CacheProvider>
  );
}
