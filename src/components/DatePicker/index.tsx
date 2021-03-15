import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

import { DatePickerButton, Icon, DateText } from './styles';

type DatePickerProps = {
  date: Date,
  setDate: (date: Date) => void
};

const DatePicker = ({ date, setDate }: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnPress = () => {
    setIsOpen(true);
  }

  const handleOnChange = (
    event: Event & { type: string}, 
    selectedDate: Date | undefined
  ) => {
    if(event.type === "set" && selectedDate) {
      setIsOpen(false);
      setDate(selectedDate);
      return;
    }

    setIsOpen(false);
  }

  return (
    <View>
      <DatePickerButton onPress={handleOnPress}>
        <Icon
          name={"calendar"}
          size={20}
          color="#666360"
        />
        <DateText>{date.toLocaleDateString("pt-br")}</DateText>
      </DatePickerButton>
      {isOpen && (
        <RNDateTimePicker
          style={{ width: 330 }}
          value={date}
          mode="date"
          display="calendar"
          onChange={handleOnChange}
          minimumDate={new Date(1950, 0, 1)}
          maximumDate={new Date()}
        />
      )} 
    </View>
  ); 
}

export default DatePicker;