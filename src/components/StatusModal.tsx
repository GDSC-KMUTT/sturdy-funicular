import { Button, Modal, Portal, Space, Text, Title } from "@mantine/core";

interface StatusModalProps {
  opened: boolean;
  isCorrect: boolean;
  correctChoiceText: string;
  explanationText: string;
  handleNext: () => void;
}

function StatusModal({
  opened,
  isCorrect,
  correctChoiceText,
  explanationText,
  handleNext,
}: StatusModalProps) {
  const title = isCorrect ? "Correct!" : "Incorrect 🥲";
  return (
    <Portal>
      <Modal
        opened={opened}
        onClose={handleNext}
        withCloseButton={false}
        centered
      >
        <Title color={isCorrect ? "green" : "red"} align="center">
          {title}
        </Title>
        <Space h="lg" />

        {isCorrect ? (
          <Text size="md">
            Congratulations, <b>"{correctChoiceText}"</b> is the correct answer!
          </Text>
        ) : (
          <Text size="md">
            Sorry, <b>"{correctChoiceText}"</b> is the correct answer.
          </Text>
        )}

        <Space h="lg" />
        <Text color="gray.7">{explanationText}</Text>

        <Space h="xl" />
        <Button fullWidth variant="outline" color="green" onClick={handleNext}>
          Continue
        </Button>
      </Modal>
    </Portal>
  );
}

export default StatusModal;
