import { Text, AspectRatio } from '@chakra-ui/react';

const Top = () => (
  <>
    <Text fontSize="5xl">Top</Text>
    <AspectRatio ratio={16 / 9}>
      <iframe src="https://hiroppy.github.io/fusuma/intro/" />
    </AspectRatio>
  </>
);

export default Top;
