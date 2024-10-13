import { FormDataType } from '@/app/page';
import {
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';

interface RegisterSexProps {
  userSex: FormDataType['userSex'];
  handleChange: (valueAsString: string) => void;
}

export const RegisterSex = ({ userSex, handleChange }: RegisterSexProps) => {
  return (
    <FormControl isRequired>
      <FormLabel>Your Gender Type</FormLabel>
      <RadioGroup
        value={userSex}
        onChange={handleChange}
        defaultValue={userSex}
      >
        <HStack>
          <Radio value='male'>Male</Radio>
          <Radio value='female'>Female</Radio>
        </HStack>
      </RadioGroup>
    </FormControl>
  );
};
