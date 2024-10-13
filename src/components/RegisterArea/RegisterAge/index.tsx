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

interface RegisterageProps {
  age: FormDataType['age'];
  handleChange: (valueAsNumber: number) => void;
}

export const RegisterAge = ({ age, handleChange }: RegisterageProps) => {
  const handleNumberInputChange = (value: string) => {
    handleChange(Number(value));
  };
  return (
    <FormControl isRequired>
      <FormLabel>How Old Are You</FormLabel>
      <NumberInput
        defaultValue={age}
        min={0}
        max={100}
        value={age}
        name='age'
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
