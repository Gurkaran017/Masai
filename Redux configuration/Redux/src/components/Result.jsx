import { useSelector } from "react-redux";
import { Box, Heading, Text } from "@chakra-ui/react";

export const Result = () => {
  const { score, questions } = useSelector((state) => state.quiz);

  return (
    <Box textAlign="center" mt={10}>
      <Heading size="lg">Quiz Completed!</Heading>
      <Text fontSize="xl" mt={4}>
        Your Score: {score} / {questions.length}
      </Text>
    </Box>
  );
};
