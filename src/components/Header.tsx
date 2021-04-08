import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserLine } from "react-icons/ri";

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="20"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" width="64">
        dashgo
        <Text as="span" marginLeft="1" color="pink.500">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        paddingY="4"
        paddingX="8"
        marginLeft="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        background="gray.800"
        borderRadius="full"
      >
        {/* variant="unstyled" is an input without boder and background */}
        <Input
          color="gray.50"
          variant="unstyled"
          paddingX="4"
          marginRight="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      {/* marginLeft="auto" position everything to the right 
          HStack, horizontal stacked
      */}
      <Flex align="center" marginLeft="auto">
        <HStack
          spacing="4"
          marginX="8"
          paddingRight="8"
          paddingY="1"
          color="gray.300"
          borderRightWidth={1}
          boderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box marginRight="4" textAlign="right">
            <Text>Georgina Rojas</Text>
            <Text color="gray.300" fontSize="small">
              ginarojas29@gmail.com
            </Text>
          </Box>
          <Avatar size="md" name="Georgina Rojas" src="https://github.com/georginarojas.png" />
        </Flex>

      </Flex>
    </Flex>
  );
}
