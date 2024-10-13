import { FormDataType } from '@/app/page';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

interface RegisterUserNameProps {
  userName: FormDataType['userName'];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RegisterUserName = ({
  userName,
  handleChange,
}: RegisterUserNameProps) => {
  return (
    <FormControl isRequired>
      <FormLabel>What Is Your Name</FormLabel>
      <Input value={userName} name='userName' onChange={handleChange} />
    </FormControl>
  );
};
