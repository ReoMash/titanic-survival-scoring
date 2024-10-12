import { FormDataType } from '@/app/page';
import {
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';

interface RegisterSpounseNumberProps {
  spounseNumber: FormDataType['spounseNumber'];
  handleChange: (valueAsNumber: number) => void;
}

export const RegisterSpounseNumber = ({
  spounseNumber,
  handleChange,
}: RegisterSpounseNumberProps) => {
  const handleRadioChange = (value: string) => {
    handleChange(Number(value));
  };

  return (
    <FormControl isRequired>
      <FormLabel>Are You Taking Your Spounse?</FormLabel>
      <RadioGroup
        value={String(spounseNumber)}
        onChange={handleRadioChange}
        defaultValue={String(spounseNumber)}
      >
        <HStack>
          <Radio value='0'>No</Radio>
          <Radio value='1'>Yes</Radio>
        </HStack>
      </RadioGroup>
    </FormControl>
  );
};
