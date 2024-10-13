import { FormDataType } from '@/app/page';
import {
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';

interface RegisterSexProps {
  sex: FormDataType['sex'];
  handleChange: (valueAsString: string) => void;
}

export const RegisterSex = ({ sex, handleChange }: RegisterSexProps) => {
  return (
    <FormControl isRequired>
      <FormLabel>Your Gender Type</FormLabel>
      <RadioGroup value={sex} onChange={handleChange} defaultValue={sex}>
        <HStack>
          <Radio value='male'>Male</Radio>
          <Radio value='female'>Female</Radio>
        </HStack>
      </RadioGroup>
    </FormControl>
  );
};
