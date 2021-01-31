import { Flex } from '@chakra-ui/react';

export const TopContainer = ({ children, ...props }) => (
  <Flex
    w="100%"
    h="100%"
    px="4"
    align="center"
    justify="space-between"
    maxW={{ xl: '1200px' }}
    m="0 auto"
    {...props}
  >
    {children}
  </Flex>
);
