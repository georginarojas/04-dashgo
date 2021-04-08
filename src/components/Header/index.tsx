import { Flex } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { NotificationsNav } from "./NotificationsNav";
import { Search } from "./Search";
import { Logo } from "./Logo";

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
      <Logo />
      <Search />
      {/* marginLeft="auto" position everything to the right 
          HStack, horizontal stacked
      */}
      <Flex align="center" marginLeft="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
}
