import { Box, Text, Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontSize="small" fontWeight="bold" color="gray.400">
        {title}
      </Text>
      <Stack spacing="4" marginTop="8" align="strech">
        {children}
      </Stack>
    </Box>
  );
}
