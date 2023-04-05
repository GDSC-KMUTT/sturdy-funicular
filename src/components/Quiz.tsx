import { Button, Modal, Stack, Title } from "@mantine/core";

import { QuizInfo } from "../App";
import StatusModal from "./StatusModal";
import React from "react";

interface QuizInterface {
  quizInfo: QuizInfo;
  handleNext: () => void;
}

function Quiz({ quizInfo, handleNext }: QuizInterface) {
  const [opened, setOpened] = React.useState(false);
  const [isCorrect, setCorrect] = React.useState(false);

  const handleClick = (index: number) => {
    if (index == quizInfo.answerIndex) setCorrect(true);
    setOpened(true);
  };

  return (
    <>
      <Stack spacing="xl">
        <Title order={2}>{quizInfo.question}</Title>
        <Stack>
          {quizInfo.options.map((option, index) => (
            <Button
              variant="outline"
              radius="xl"
              size="md"
              key={option.text}
              onClick={() => handleClick(index)}
            >
              {option.text}
            </Button>
          ))}
        </Stack>
      </Stack>

      <StatusModal
        opened={opened}
        isCorrect={isCorrect}
        correctChoiceText={quizInfo.options[quizInfo.answerIndex].text}
        explanationText={quizInfo.explanationText}
        handleNext={handleNext}
      />
    </>
  );
}

export default Quiz;
