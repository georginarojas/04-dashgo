import React from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { SiderBar } from "../components/SideBar";

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="16"
      >
          <SiderBar/>
      </Flex>
    </Flex>
  );
}
