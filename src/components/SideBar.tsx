import React from "react";
import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
  RiMeteorLine,
} from "react-icons/ri";

export function SiderBar() {
  return (
    // align='flex-start' is everything align to the left
    <Box as="aside" width="64" marginRight="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontSize="small" fontWeight="bold" color="gray.400">
            GERAL
          </Text>
          <Stack spacing="4" marginTop="8" align="strech">
            <Link display="flex" align="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text marginLeft="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>

            <Link display="flex" align="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text marginLeft="4" fontWeight="medium">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontSize="small" fontWeight="bold" color="gray.400">
            AUTOMAÇÃO
          </Text>
          <Stack spacing="4" marginTop="8" align="strech">
            <Link display="flex" align="center">
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text marginLeft="4" fontWeight="medium">
                Formulários
              </Text>
            </Link>

            <Link display="flex" align="center">
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text marginLeft="4" fontWeight="medium">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
