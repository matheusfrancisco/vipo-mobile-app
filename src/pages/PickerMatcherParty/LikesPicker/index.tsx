import { useField } from 'formik';
import React, { useCallback } from 'react';
import PickerRow from '../PickerRow';

import { Container, OptionButton, OptionText } from './styles';

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
      const isSelected = field.value[value];

      if (isSelected) {
        return helpers.setValue({
          ...field.value,
          [value]: false,
        });
      }

      const alreadySelectedOptions = Object.values(field.value).filter(
        (selected) => selected,
      );

      const canSelectMoreOptions =
        alreadySelectedOptions.length < MAX_SELECTIONS_ALLOWED;
      if (!canSelectMoreOptions) {
        return;
      }

      helpers.setValue({
        ...field.value,
        [value]: true,
      });
    },
    [field.value, helpers],
  );

  return (
    <Container>
      {optionsMatrix.map((row, index) => (
        <PickerRow key={`likes-row-${index}`}>
          {row.map((option) => (
            <OptionButton
              selected={field.value[option.value]}
              key={option.value}
              onPress={handleSelect(option.value)}>
              <OptionText selected={field.value[option.value]}>
                {option.label}
              </OptionText>
            </OptionButton>
          ))}
        </PickerRow>
      ))}
    </Container>
  );
};

export default LikesPicker;
