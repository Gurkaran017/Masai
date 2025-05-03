import { Flex, Button, Text } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";
import { useThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { isLoggedIn, toggleAuth } = useAuth();
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Flex justify="space-between" p="4" bg={theme === "light" ? "gray.100" : "gray.700"} color={theme === "light" ? "black" : "white"}>
      <Text>{isLoggedIn ? "Logged In" : "Logged Out"}</Text>
      <Button onClick={toggleAuth} size="sm">
        {isLoggedIn ? "Logout" : "Login"}
      </Button>
      <Button onClick={toggleTheme} size="sm">
        Toggle Theme
      </Button>
    </Flex>
  );
};

export default Navbar;
