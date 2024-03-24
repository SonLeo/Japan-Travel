"use client";
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import StoreProvider from './lib/features/storeProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(() => new QueryClient({}));
  return (
    <>
       <ChakraProvider>
        <QueryClientProvider client={client}>
          <StoreProvider>
            
          {children}
          </StoreProvider>
            
          </QueryClientProvider>
        </ChakraProvider>
    </>
  );
}