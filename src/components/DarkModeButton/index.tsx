import React from "react";
import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { MdDarkMode, MdLightbulb } from "react-icons/md";

function DarkModeButton(props: any) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <IconButton
        onClick={toggleColorMode}
        icon={
          colorMode === "light" ? <MdDarkMode /> : <MdLightbulb color="black" />
        }
        background={colorMode === "light" ? "#282c34" : "#ffff"}
        _hover={{
          background: useColorModeValue("#21252b", "#ffe33f"),
        }}
        {...props}
      />
    </>
  );
}

export default DarkModeButton;
