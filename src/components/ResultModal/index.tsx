import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

interface ResultModalProps {
  prediction: number;
}

export const ResultModal = ({ prediction }: ResultModalProps) => {
  const { onOpen, onClose } = useDisclosure();
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Result</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>You Have {prediction}% of Survival</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme='blue'
            mr={3}
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
