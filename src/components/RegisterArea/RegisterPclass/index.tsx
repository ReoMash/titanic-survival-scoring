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
  handleChange: (valueAsNumber: number) => void;
}

export const RegisterPClass = ({
  pClass,
  handleChange,
}: RegisterPClassProps) => {
  const handleRadioChange = (value: string) => {
    handleChange(Number(value));
  };
  return (
    <FormControl isRequired>
      <FormLabel>Your Social Rank</FormLabel>
      <RadioGroup
        name='pClass'
        value={String(pClass)}
        onChange={handleRadioChange}
        defaultValue={String(pClass)}
      >
        <HStack>
          <Radio value='1'>Upper Class</Radio>
          <Radio value='2'>Middle Class</Radio>
          <Radio value='3'>Working Class</Radio>
        </HStack>
      </RadioGroup>
    </FormControl>
  );
};
