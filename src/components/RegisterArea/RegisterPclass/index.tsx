import { FormDataType } from '@/app/page';
import {
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';

interface RegisterPClassProps {
  pClass: FormDataType['pClass'];
  handleChange: (valueAsString: string) => void;
}

export const RegisterPClass = ({
  pClass,
  handleChange,
}: RegisterPClassProps) => {
  return (
    <FormControl isRequired>
      <FormLabel>Your Social Rank</FormLabel>
      <RadioGroup
        name='pClass'
        value={pClass}
        onChange={handleChange}
        defaultValue={pClass}
      >
        <HStack>
          <Radio value='upper'>Upper Class</Radio>
          <Radio value='middle'>Middle Class</Radio>
          <Radio value='working'>Working Class</Radio>
        </HStack>
      </RadioGroup>
    </FormControl>
  );
};
