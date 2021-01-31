import { chakra, Flex, Box, Container, Image } from '@chakra-ui/react';
import { TopContainer } from './TopContainer';
import logo from '../assets/logo-black.svg';

export const Header = () => (
  <chakra.header background="blue.400">
    <TopContainer height="56px">
      <Flex w="100%" h="100%" px="4" align="center" justify="space-between">
        <Flex w="100%" h="100%" align="center" justify="flex-start">
          <Image src={logo} alt="fusuma" height="32px" />
        </Flex>
        <Flex w="100%" h="100%" align="center" justify="flex-end">
          aaaa
        </Flex>
      </Flex>
    </TopContainer>
  </chakra.header>
);
