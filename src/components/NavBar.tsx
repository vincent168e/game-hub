import { HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="50px" objectFit="cover" />
      </Link>
      {/* <Heading fontSize="xl" whiteSpace="nowrap">
        Game Hub
      </Heading> */}
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
