'use client';

import { FormDataType } from '@/app/page';
import { VStack } from '@chakra-ui/react';
import { RegisterAge } from './RegisterAge';
import { RegisterChildrenNumber } from './RegisterChildrenNumber';
import { RegisterEmbarked } from './RegisterEmbarked';
import { RegisterParentNumber } from './RegisterParentNumber';
import { RegisterPClass } from './RegisterPclass';
import { RegisterSex } from './RegisterSex';
import { RegisterSiblingNumber } from './RegisterSiblingNumber';
import { RegisterSpounseNumber } from './RegisterSpounseNumber';
import { RegisterUserName } from './RegisterUserName';

interface RegisterAreaProps {
  formData: FormDataType;
  setFormData: (formData: FormDataType) => void;
}

export const RegisterArea = ({ formData, setFormData }: RegisterAreaProps) => {
  const handleChange = (name: keyof FormDataType, value: string | number) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData);

  return (
    <VStack spacing={4}>
      <RegisterUserName
        userName={formData.userName}
        handleChange={(e) => handleChange('userName', e.target.value)}
      />
      <RegisterAge
        age={formData.age}
        handleChange={(valueAsNumber) => handleChange('age', valueAsNumber)}
      />
      <RegisterSex
        sex={formData.sex}
        handleChange={(valueAsString) => handleChange('sex', valueAsString)}
      />
      <RegisterPClass
        pClass={formData.pClass}
        handleChange={(valueAsNumber) => handleChange('pClass', valueAsNumber)}
      />
      <RegisterParentNumber
        parentNumber={formData.parentNumber}
        handleChange={(valueAsNumber) =>
          handleChange('parentNumber', valueAsNumber)
        }
      />
      <RegisterChildrenNumber
        childrenNumber={formData.childrenNumber}
        handleChange={(valueAsNumber) =>
          handleChange('childrenNumber', valueAsNumber)
        }
      />
      <RegisterSiblingNumber
        siblingNumber={formData.siblingNumber}
        handleChange={(valueAsNumber) =>
          handleChange('siblingNumber', valueAsNumber)
        }
      />
      <RegisterSpounseNumber
        spounseNumber={formData.spounseNumber}
        handleChange={(valueAsNumber) =>
          handleChange('spounseNumber', valueAsNumber)
        }
      />
      <RegisterEmbarked
        embarked={formData.embarked}
        handleChange={(valueAsString) =>
          handleChange('embarked', valueAsString)
        }
      />
    </VStack>
  );
};
