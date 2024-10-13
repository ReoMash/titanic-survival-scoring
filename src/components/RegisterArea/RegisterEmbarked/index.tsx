import { FormDataType } from '@/app/page';
import {
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';

interface RegisterEmbarkedProps {
  embarked: FormDataType['embarked'];
  handleChange: (valueAsString: string) => void;
}

export const RegisterEmbarked = ({
  embarked,
  handleChange,
}: RegisterEmbarkedProps) => {
  return (
    <FormControl isRequired>
      <FormLabel>Choose Your Departure Port</FormLabel>
      <RadioGroup value={embarked} onChange={handleChange}>
        <HStack>
          <Radio value='c'>Cherbourg</Radio>
          <Radio value='q'>Queenstown</Radio>
          <Radio value='s'>Southampton</Radio>
        </HStack>
      </RadioGroup>
    </FormControl>
  );
};
