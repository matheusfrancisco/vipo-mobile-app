import { useField } from 'formik';
import React, { useCallback } from 'react';
import PickerRow from '../PickerRow';

import { Container, OptionButton } from './styles';

type OptionValuesEnum =
  | 'lunch'
  | 'drink'
  | 'talk'
  | 'meetPeople'
  | 'dance'
  | 'lovers';

type ILikesValues = Record<OptionValuesEnum, boolean>;

interface IOption {
  value: OptionValuesEnum;
  label: string;
}

const optionsMatrix: Array<IOption[]> = [
  [
    {
      value: 'lunch',
      label: 'Comer 🍔',
    },
    {
      value: 'drink',
      label: 'Beber 🍹',
    },
  ],
  [
    {
      value: 'talk',
      label: 'Conversar 🗣',
    },
    {
      value: 'meetPeople',
      label: 'Conhecer gente nova 😍',
    },
  ],
  [
    {
      value: 'dance',
      label: 'Dançar 🕺',
    },
    {
      value: 'lovers',
      label: 'Rolê romântico ❤',
    },
  ],
];

const MAX_SELECTIONS_ALLOWED = 3;

const LikesPicker: React.FC = () => {
  const [field, , helpers] = useField<ILikesValues>('likes');

  const handleSelect = useCallback(
    (value: OptionValuesEnum) => () => {
      const alreadySelected = Object.values(field.value).filter(
        (selected) => selected,
      );

      const canSelectMoreOptions =
        alreadySelected.length < MAX_SELECTIONS_ALLOWED;
      if (!canSelectMoreOptions) {
        return;
      }

      helpers.setValue({
        ...field.value,
        [value]: !field.value[value],
      });
    },
    [field.value, helpers],
  );

  return (
    <Container>
      {optionsMatrix.map((row) => (
        <PickerRow>
          {row.map((option) => (
            <OptionButton
              selected={field.value[option.value]}
              key={option.value}
              onPress={handleSelect(option.value)}>
              {option.label}
            </OptionButton>
          ))}
        </PickerRow>
      ))}
    </Container>
  );
};

export default LikesPicker;
