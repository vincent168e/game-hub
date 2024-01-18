import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
// import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="orange"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
      {/* {colorMode === "dark" ? <BsSunFill /> : <BsMoonFill />} */}
    </HStack>
  );
};

export default ColorModeSwitch;
