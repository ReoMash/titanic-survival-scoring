import { ChakraProvider, CSSReset } from '@chakra-ui/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <CSSReset />
      {children}
    </ChakraProvider>
  );
}
