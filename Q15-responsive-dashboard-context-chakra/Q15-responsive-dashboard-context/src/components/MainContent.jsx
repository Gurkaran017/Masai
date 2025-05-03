import { Grid, Box, Text } from "@chakra-ui/react";
import { useThemeContext } from "../contexts/ThemeContext";

const MainContent = () => {
  const { theme } = useThemeContext();

  const products = ["Product A", "Product B", "Product C", "Product D", "Product E"];

  return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="4" p="4">
      {products.map((item) => (
        <Box key={item} p="4" bg={theme === "light" ? "gray.300" : "gray.500"} shadow="md">
          <Text>{item}</Text>
        </Box>
      ))}
    </Grid>
  );
};

export default MainContent;
