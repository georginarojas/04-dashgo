import React from "react";
import Link from "next/link";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SiderBar } from "../../components/Sidebar";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_corfirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "No mínimo 6 caractere"),
  password_corfirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senha devem ser iguais"),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Box>
      <Header />
      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX={["5", "6", "20"]}
      >
        <SiderBar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          background="gray.800"
          padding={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          {/* Dividing line */}
          <Divider marginY="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Box>
                <Input
                  name="name"
                  label="Name"
                  error={errors.name}
                  {...register("name")}
                />
              </Box>
              <Box>
                <Input
                  name="email"
                  label="E-mail"
                  error={errors.email}
                  {...register("email")}
                />
              </Box>
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
              <Box>
                <Input
                  name="password"
                  type="password"
                  label="Senha"
                  error={errors.password}
                  {...register("password")}
                />
              </Box>
              <Box>
                <Input
                  name="password_corfirmation"
                  type="password"
                  error={errors.password_corfirmation}
                  label="Confirmar senha"
                  {...register("password_corfirmation")}
                />
              </Box>
            </SimpleGrid>
          </VStack>

          <Flex marginTop="10" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
