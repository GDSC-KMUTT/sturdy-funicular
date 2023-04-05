import { Button, Modal, Stack, Title } from '@mantine/core';

import StatusModal from './StatusModal';
import { useState } from 'react';
import { QuizInfo } from '../interfaces/quizz';

interface QuizzProps {
  quizInfo: QuizInfo;
  handleNext: () => void;
  handleClick: (index: number) => void;
}

function Quiz({ quizInfo, handleNext, handleClick }: QuizzProps) {
  const [opened, setOpened] = useState(false);
  const [isCorrect, setCorrect] = useState(false);

  const handleChoice = (index: number) => {
    handleClick(index);
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
              onClick={() => handleChoice(index)}
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
