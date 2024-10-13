import { FormDataType } from '@/app/page';
import {
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';

interface RegisterSiblingNumberProps {
  siblingNumber: FormDataType['siblingNumber'];
  handleChange: (valueAsNumber: number) => void;
}

export const RegisterSiblingNumber = ({
  siblingNumber,
  handleChange,
}: RegisterSiblingNumberProps) => {
  const handleNumberInputChange = (value: string) => {
    handleChange(Number(value));
  };
  return (
    <FormControl isRequired>
      <FormLabel>How Many Siblings Do You Accompany</FormLabel>
      <NumberInput
        defaultValue={siblingNumber}
        min={0}
        max={10}
        value={siblingNumber}
        onChange={handleNumberInputChange}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};
