import { Box, Text } from "@chakra-ui/react";
import { useThemeContext } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useThemeContext();

  return (
    <Box bg={theme === "light" ? "gray.200" : "gray.700"} color={theme === "light" ? "black" : "white"} p="4" mt="auto" textAlign="center">
      <Text>© 2025 Responsive Dashboard</Text>
    </Box>
  );
};

export default Footer;
