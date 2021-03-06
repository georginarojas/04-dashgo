import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

// extends ChakraLinkProps : We can pass all the link props
interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType; // passes the component reference
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    // passHref - Forces Link to send the href property to its child (ChakraLink).
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text marginLeft="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
