import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_QUESTIONS_SUCCESS, NEXT_QUESTION, INCREMENT_SCORE } from "../redux/actionTypes";
import axios from "axios";
import { Button, Text, Box, VStack } from "@chakra-ui/react";

export const Quiz = () => {
  const { questions, currentQuestion } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz")
      .then((res) => dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: res.data.data }));
  }, []);

  const handleAnswer = (correct) => {
    if (correct) dispatch({ type: INCREMENT_SCORE });
    dispatch({ type: NEXT_QUESTION });
  };

  if (!questions.length) return <Text>Loading...</Text>;
  if (currentQuestion >= questions.length) return <Text>Quiz Completed!</Text>;

  const question = questions[currentQuestion];

  return (
    <Box>
      <Text>{question.question}</Text>
      <VStack>
        {question.options.map((opt, i) => (
          <Button key={i} onClick={() => handleAnswer(opt === question.correctOption)}>
            {opt}
          </Button>
        ))}
      </VStack>
    </Box>
  );
};
