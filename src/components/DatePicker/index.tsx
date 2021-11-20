import React, { useCallback, useState } from 'react';
import { TextInputProps, View } from 'react-native';

import RNDateTimePicker from '@react-native-community/datetimepicker';
import { useField } from 'formik';

import { DatePickerButton, Icon, DateText, TextError } from './styles';

interface Props {
  name: string;
  placeholder?: TextInputProps['placeholder'];
  required?: boolean;
}

const DatePicker: React.FC<Props> = ({ name, required, ...props }: Props) => {
  const [showDataPicker, setShowDataPicker] = useState(false);
  const [{ value }, { error, touched }, { setValue }] = useField<
    Date | undefined
  >(name);

  const handleOnChange = useCallback(
    (_: unknown, date?: Date) => {
      setShowDataPicker(false);
      setValue(date);
    },
    [setValue],
  );

  const placeholder =
    props.placeholder && `${props.placeholder}${required ? ' *' : ''}`;

  return (
    <View>
      <DatePickerButton
        onPress={() => {
          setShowDataPicker(!showDataPicker);
        }}>
        <Icon name={'calendar'} size={20} color="#666360" />
        <DateText>{value?.toLocaleDateString() || placeholder}</DateText>
      </DatePickerButton>
      {showDataPicker && (
        <RNDateTimePicker
          mode={'datetime'}
          style={{ width: 330 }}
          value={new Date()}
          onChange={handleOnChange}
          minimumDate={new Date(1950, 0, 1)}
          maximumDate={new Date()}
        />
      )}
      {touched && error && <TextError>{error}</TextError>}
    </View>
  );
};

export default DatePicker;
