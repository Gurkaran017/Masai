import { Box, Text } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";
import { useThemeContext } from "../contexts/ThemeContext";

const Sidebar = () => {
  const { isLoggedIn } = useAuth();
  const { theme } = useThemeContext();

  return (
    <Box
      display={{ base: "none", md: "block" }}
      bg={theme === "light" ? "gray.200" : "gray.600"}
      p="4"
      minW="200px"
    >
      <Text fontWeight="bold">Sidebar</Text>
      {isLoggedIn && <Text mt="2">Welcome, User!</Text>}
    </Box>
  );
};

export default Sidebar;
