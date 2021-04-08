import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box marginRight="4" textAlign="right">
        <Text>Georgina Rojas</Text>
        <Text color="gray.300" fontSize="small">
          ginarojas29@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Georgina Rojas"
        src="https://github.com/georginarojas.png"
      />
    </Flex>
  );
}
