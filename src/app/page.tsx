'use client';
import { RegisterArea } from '@/components/RegisterArea';
import { Button, VStack } from '@chakra-ui/react';
import { useState } from 'react';

export type FormDataType = {
  userName: string;
  userAge: number;
  userSex: 'male' | 'female';
  pClass: 'upper' | 'middle' | 'working';
  parentNumber: number;
  childrenNumber: number;
  siblingNumber: number;
  spounseNumber: number;
  embarked: 'C' | 'Q' | 'S';
};

export default function Home() {
  const [formData, setFormData] = useState<FormDataType>({
    userName: '',
    userAge: 20,
    userSex: 'male',
    pClass: 'upper',
    parentNumber: 0,
    childrenNumber: 0,
    siblingNumber: 0,
    spounseNumber: 0,
    embarked: 'C',
  });

  const handleSubmit = () => {
    // TODO 登録処理
    console.log('hoge');
  };
  return (
    <VStack
      as={'form'}
      spacing={3}
      align={'start'}
      p={5}
      onSubmit={handleSubmit}
    >
      <RegisterArea formData={formData} setFormData={setFormData} />
      <Button type='submit' colorScheme='blue'>
        Submit
      </Button>
    </VStack>
  );
}
