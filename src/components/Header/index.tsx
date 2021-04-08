import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { NotificationsNav } from "./NotificationsNav";
import { Search } from "./Search";
import { Logo } from "./Logo";

export function Header() {
  // -- This is used for responsive applications
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
      {isWideVersion && <Search />}

      {/* marginLeft="auto" position everything to the right 
          HStack, horizontal stacked
      */}
      <Flex align="center" marginLeft="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
