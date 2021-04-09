import { Flex, Input, Icon } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export function Search() {
  // With controlled components
  // const [search, setSearch] = useState("");

  // With uncontrolled component
  const searchInputRef = useRef<HTMLInputElement>(null);
  // console.log(searchInputRef.current.value);

  return (
    <Flex
      as="label"
      flex="1"
      paddingY="4"
      paddingX="8"
      marginLeft="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      background="gray.800"
      borderRadius="full"
    >
      {/* variant="unstyled" is an input without border and background */}
      <Input
        color="gray.50"
        variant="unstyled"
        paddingX="4"
        marginRight="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
        // value={search}
        // onChange={(event) => setSearch(event.target.value)}
        ref={searchInputRef}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
