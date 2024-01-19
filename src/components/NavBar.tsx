import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="50px" />
      <Heading fontSize="xl" whiteSpace="nowrap">
        Game Hub
      </Heading>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
