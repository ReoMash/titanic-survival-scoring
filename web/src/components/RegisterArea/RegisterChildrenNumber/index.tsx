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

interface RegisterChildrenNumberProps {
  childrenNumber: FormDataType['childrenNumber'];
  handleChange: (valueAsString: string, valueAsNumber: number) => void;
}

export const RegisterChildrenNumber = ({
  childrenNumber,
  handleChange,
}: RegisterChildrenNumberProps) => {
  return (
    <FormControl isRequired>
      <FormLabel>How Many Children Do You Accompany</FormLabel>
      <NumberInput
        defaultValue={childrenNumber}
        min={0}
        max={10}
        value={childrenNumber}
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
