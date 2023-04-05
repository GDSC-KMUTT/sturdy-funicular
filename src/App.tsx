import React, { useState } from "react";

import Quiz from "./components/Quiz";
import {
  BackgroundImage,
  Center,
  Container,
  LoadingOverlay,
} from "@mantine/core";

interface QuizChoice {
  text: string;
}

interface QuizInfo {
  question: string;
  options: QuizChoice[];
  answerIndex: number;
  explanationText: string;
}

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [quizData, setQuizData] = useState<QuizInfo[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("./json/questions.json");
        const data = await response.json();
        setQuizData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((curr) => curr + 1);
  };

  if (!quizData || quizData.length === 0)
    return <LoadingOverlay overlayBlur={2} visible />;

  return (
    <>
      <BackgroundImage
        src="./img/background.jpg"
        bgp="top"
        sx={{ height: "100%" }}
      >
        <Center sx={{ height: "100%" }}>
          <Container size="32rem">
            <Quiz
              quizInfo={quizData[currentIndex]}
              handleNext={handleNext}
              key={currentIndex}
            />
          </Container>
        </Center>
      </BackgroundImage>
    </>
  );
}

export default App;

export type { QuizInfo };
