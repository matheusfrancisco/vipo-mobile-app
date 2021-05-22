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
  const [field, , helpers] = useField('numberOfPeople');

  return (
    <PickerRow>
      {options.map(({ value }) => (
        <OptionButton
          key={`people-count-${value}`}
          selected={value === field.value}
          onPress={() => helpers.setValue(value)}>
          {value}
        </OptionButton>
      ))}
    </PickerRow>
  );
};

export default NumberOfPeoplePicker;
