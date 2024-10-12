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

interface RegisterParentNumberProps {
  parentNumber: FormDataType['parentNumber'];
  handleChange: (valueAsString: string, valueAsNumber: number) => void;
}

export const RegisterParentNumber = ({
  parentNumber,
  handleChange,
}: RegisterParentNumberProps) => {
  return (
    <FormControl isRequired>
      <FormLabel>How Many Parents Do You Accompany</FormLabel>
      <NumberInput
        defaultValue={parentNumber}
        min={0}
        max={2}
        value={parentNumber}
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
