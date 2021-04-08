import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserLine } from "react-icons/ri";

export function NotificationsNav() {
  return (
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
  );
}