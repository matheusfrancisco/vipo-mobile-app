import { useField } from 'formik';
import React from 'react';
import PickerRow from '../PickerRow';
import { OptionButton } from './styles';

interface IOption {
  value: number;
}

const options: IOption[] = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
];

const NumberOfPeoplePicker: React.FC = () => {
  const [field, , helpers] = useField('howMuch');

  return (
    <PickerRow>
      {options.map((option) => (
        <OptionButton
          key={`option-button-${option}`}
          selected={option === field.value}
          onPress={() => helpers.setValue(option)}>
          {option}
        </OptionButton>
      ))}
    </PickerRow>
  );
};

export default NumberOfPeoplePicker;
