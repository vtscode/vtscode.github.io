import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: "black",
    dark: "white",
  };
  
  return (
    <>
      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        color={iconColor[colorMode]}
        variant="ghost"
        _hover={{ background: "none" }}
        _focus={{ background: "none", border: "none" }}
      />
      {colorMode === "dark" ? (
        <style jsx global>{`
          .notion {
            color: var(--chakra-colors-gray-400);
          }
        `}</style>
      ) : (
        <style jsx global>{`
          .notion {
            color: var(--chakra-colors-gray-600);
          }
        `}</style>
      )}
    </>
  );
};

export default DarkModeSwitch;
