'use client';
import { RegisterArea } from '@/components/RegisterArea';
import { ResultModal } from '@/components/ResultModal';
import { Button, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

export type FormDataType = {
  userName: string;
  age: number;
  sex: 'male' | 'female';
  pClass: number;
  parentNumber: number;
  childrenNumber: number;
  siblingNumber: number;
  spounseNumber: number;
  embarked: 'c' | 'q' | 's';
};

export default function Home() {
  const [formData, setFormData] = useState<FormDataType>({
    userName: '',
    age: 20,
    sex: 'male',
    pClass: 1,
    parentNumber: 0,
    childrenNumber: 0,
    siblingNumber: 0,
    spounseNumber: 0,
    embarked: 'c',
  });
  const [prediction, setPrediction] = useState<number>();
  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    // TODO 登録処理
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/predict`,
      { formData }
    );
    setPrediction(Math.floor(response.data.prediction * 100 * 100) / 100);
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
      {prediction && <ResultModal prediction={prediction} />}
    </VStack>
  );
}
