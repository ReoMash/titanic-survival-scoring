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
  // handleChangeの修正：数値型も扱えるようにする
  const handleChange = (name: keyof FormDataType, value: string | number) => {
    setFormData({
      ...formData, // 現在のフォームデータを維持
      [name]: value, // 変更されたフィールドの値を更新
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
        userAge={formData.userAge}
        handleChange={(valueAsNumber) => handleChange('userAge', valueAsNumber)}
      />
      <RegisterSex
        userSex={formData.userSex}
        handleChange={(valueAsString) => handleChange('userSex', valueAsString)}
      />
      <RegisterPClass
        pClass={formData.pClass}
        handleChange={(valueAsString) => handleChange('pClass', valueAsString)}
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
