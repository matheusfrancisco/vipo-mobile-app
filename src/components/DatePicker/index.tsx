import React, { useCallback, useState } from 'react';
import { View } from 'react-native';

import RNDateTimePicker from '@react-native-community/datetimepicker';
import { useField } from 'formik';

import { DatePickerButton, Icon, DateText } from './styles';

interface Props {
  name: string;
}

const DatePicker: React.FC<Props> = ({ name }: Props) => {
  const [showDataPicker, setShowDataPicker] = useState(false);
  const [{ value }, { error, touched }, { setValue }] = useField(name);

  const handleOnChange = useCallback(
    (_: unknown, date?: Date) => {
      setShowDataPicker(false);
      setValue(date?.toDateString());
    },
    [setValue],
  );

  return (
    <View>
      <DatePickerButton onPress={() => setShowDataPicker(true)}>
        <Icon name={'calendar'} size={20} color="#666360" />
        <DateText>{value ? value : 'Data de nascimento'}</DateText>
      </DatePickerButton>
      {showDataPicker && (
        <RNDateTimePicker
          style={{ width: 330 }}
          value={new Date()}
          onChange={handleOnChange}
          minimumDate={new Date(1950, 0, 1)}
          maximumDate={new Date()}
        />
      )}
    </View>
  );
};

export default DatePicker;
