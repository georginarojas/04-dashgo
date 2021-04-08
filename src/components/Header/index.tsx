import { Flex, IconButton, useBreakpointValue, Icon } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { NotificationsNav } from "./NotificationsNav";
import { Search } from "./Search";
import { Logo } from "./Logo";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSidebarDrawer();

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
      {/* aria-label this mean what this button doing */}
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}

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
