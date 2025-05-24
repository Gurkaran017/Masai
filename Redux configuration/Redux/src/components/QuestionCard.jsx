import { Button, Text, VStack, Box } from "@chakra-ui/react";

export const QuestionCard = ({ questionData, handleAnswer }) => {
  const { question, options } = questionData;

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} shadow="md" width="100%" maxW="600px" mx="auto">
      <Text fontSize="xl" mb={4}>{question}</Text>
      <VStack spacing={3}>
        {options.map((option, index) => (
          <Button
            key={index}
            width="100%"
            colorScheme="teal"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </Button>
        ))}
      </VStack>
    </Box>
  );
};
