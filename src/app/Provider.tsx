"use client";
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(() => new QueryClient({}));
  return (
    <>
       <ChakraProvider>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
        </ChakraProvider>
    </>
  );
}
