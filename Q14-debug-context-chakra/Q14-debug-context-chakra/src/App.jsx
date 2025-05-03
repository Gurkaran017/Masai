import { ChakraProvider, extendTheme, Box, Flex, Grid, Button } from "@chakra-ui/react";
import { AuthContextProvider } from "./AuthContext";
import { ThemeContextProvider, useThemeContext } from "./ThemeContext";
import { useAuth } from "./AuthContext";

const CardGrid = () => {
  const { theme } = useThemeContext();
  const bgColor = theme === "light" ? "gray.100" : "gray.600";

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      gap={4}
      p={4}
    >
      {["Card 1", "Card 2", "Card 3"].map((card) => (
        <Box key={card} p={4} shadow="md" bg={bgColor} borderRadius="md">
          {card}
        </Box>
      ))}
    </Grid>
  );
};

const Footer = () => {
  const { theme } = useThemeContext();
  return (
    <Box
      as="footer"
      p="4"
      bg={theme === "light" ? "gray.200" : "gray.800"}
      color={theme === "light" ? "black" : "white"}
      textAlign="center"
    >
      Footer Content
    </Box>
  );
};

const Navbar = () => {
  const { isLoggedIn, toggleAuth } = useAuth();
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Flex
      as="nav"
      p="4"
      bg={theme === "light" ? "gray.100" : "gray.700"}
      justifyContent="space-between"
      alignItems="center"
    >
      <Button onClick={toggleAuth}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </Button>
      <Button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "Dark" : "Light"} Theme
      </Button>
    </Flex>
  );
};

function AppContent() {
  return (
    <>
      <Navbar />
      <CardGrid />
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <ChakraProvider>
          <AppContent />
        </ChakraProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
