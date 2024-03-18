import { Box, Flex, Icon, Heading, Text } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";


const MyLogo = () => {
  return (
    <Flex justify="center" alignItems="center" gap={3}>
      <Box>
        <Icon aria-label="logo" as={FaReact} className="spin"  fontSize="4rem" fill="#61dafb" />
      </Box>
      <Box>
        <Heading size="md">User Authentication</Heading>
        <Text>with React, Chakra UI, Express and MongoDB</Text>
      </Box>
    </Flex>
  );
};
export default MyLogo;
