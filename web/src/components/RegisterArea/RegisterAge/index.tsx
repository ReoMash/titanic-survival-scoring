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

interface RegisterUserAgeProps {
  userAge: FormDataType['userAge'];
  handleChange: (valueAsString: string, valueAsNumber: number) => void;
}

export const RegisterAge = ({
  userAge,
  handleChange,
}: RegisterUserAgeProps) => {
  return (
    <FormControl isRequired>
      <FormLabel>How Old Are You</FormLabel>
      <NumberInput
        defaultValue={userAge}
        min={0}
        max={100}
        value={userAge}
        name='userAge'
        onChange={handleChange}
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
