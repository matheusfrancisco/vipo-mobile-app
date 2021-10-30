import React, { useCallback, useState } from 'react';
import { View } from 'react-native';

import RNDateTimePicker from '@react-native-community/datetimepicker';

import { useField } from 'formik';

import { DatePickerButton, Icon, DateText } from './styles';

const formatDate = (dateString: string): string => {
  console.log(dateString, ' aqui');

  const date = new Date(dateString);
  console.log('date', date);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  console.log(day, month, date);

  const formatedDate = `${day < 10 ? `0${day}` : day}/${
    month < 10 ? `0${month}` : month
  }/${date.getFullYear()}`;
  console.log(formatedDate);

  return formatedDate;
};

const DatePicker: React.FC = () => {
  const [showDataPicker, setShowDataPicker] = useState(false);
  const [{ value }, { error, touched }, { setValue }] = useField('date');

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
