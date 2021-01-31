import { AppProps } from 'next/app';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { TopContainer } from '../components/TopContainer';
import { Header } from '../components/Header';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Header />
      <TopContainer>
        <Box textAlign="center" width="16">
          aaaaa
        </Box>
        <Box textAlign="center">
          <Component {...pageProps} />
        </Box>
      </TopContainer>
    </ChakraProvider>
  );
};

export default MyApp;
