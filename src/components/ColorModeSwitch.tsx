import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="orange"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {/* <Text whiteSpace="nowrap">Dark Mode</Text> */}
      {colorMode === "dark" ? <BsMoonFill /> : <BsSunFill size={20} />}
    </HStack>
  );
};

export default ColorModeSwitch;
