import { useState, useEffect } from 'react';

import {
  BackgroundImage,
  Center,
  Container,
  LoadingOverlay,
  Stack,
  Text,
  Title,
  Button
} from '@mantine/core';

import Quiz from './components/Quiz';
import { QuizInfo } from './interfaces/quizz';
import { shuffleArray } from './utils/shuffle';

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [quizData, setQuizData] = useState<QuizInfo[]>([]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('./json/questions.json');
        const data = await response.json();
        setQuizData(shuffleArray<QuizInfo>(data));
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentIndex(curr => curr + 1);
  };

  const handleClick = (index: number) => {
    if (index === quizData[currentIndex].answerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleTryAgain = () => {
    setCurrentIndex(0);
    setScore(0);
  };

  if (!quizData || quizData.length === 0)
    return <LoadingOverlay overlayBlur={2} visible />;

  return (
    <>
      <BackgroundImage
        src="./img/background.jpg"
        bgp="top"
        sx={{ height: '100%' }}
      >
        <Center sx={{ height: '100%' }}>
          <Container size="32rem">
            {currentIndex === quizData.length ? (
              <Stack spacing="sm">
                <Title align="center">🎉 Congratulations!</Title>
                <Text size="lg">You have completed all the quizzes.</Text>
                <Text size="md">
                  Your Score: {score}/{quizData.length}
                </Text>
                <Button variant="outline" onClick={handleTryAgain}>
                  Try Again
                </Button>
              </Stack>
            ) : (
              <Quiz
                quizInfo={quizData[currentIndex]}
                handleNext={handleNext}
                handleClick={handleClick}
                key={currentIndex}
              />
            )}
          </Container>
        </Center>
      </BackgroundImage>
    </>
  );
}

export default App;

export type { QuizInfo };
