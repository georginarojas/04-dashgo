import React from "react";
import { Header } from "../../components/Header";
import { SiderBar } from "../../components/Sidebar";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="20"
      >
        <SiderBar />

        <Box flex="1" borderRadius={8} background="gray.800" padding="8">
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          {/* Dividing line */}
          <Divider marginY="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Box>
                <Text my="2">Name</Text>
                <Input name="name" label="Name" />
              </Box>
              <Box>
                <Text my="2">E-mail</Text>
                <Input name="email" label="E-mail" />
              </Box>
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Box>
                <Text my="2">Senha</Text>
                <Input name="password" type="password" label="Senha" />
              </Box>
              <Box>
                <Text my="2">Confirmar senha</Text>
                <Input
                  name="password_corfirmation"
                  type="password"
                  label="Confirmar senha"
                />
              </Box>
            </SimpleGrid>
          </VStack>

          <Flex marginTop="10" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
