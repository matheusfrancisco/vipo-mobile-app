import React, { useState } from 'react';
import { Container } from './styles';
import { 
  Picker,
} from '@react-native-community/picker';


const PickerItem: any = ({ setSelectedValue, selectedValue }: any) => {
  
  return (
    <Container>
      <Picker
        selectedValue={selectedValue}
        style={{
          height: 50, 
          width: 280, 
          alignItems: "center",
          color: "white"
        }}
        onValueChange={(itemValue) => { 
          setSelectedValue(itemValue) 
        }}
      >
        <Picker.Item label="Apenas eu" value="1" />
        <Picker.Item label="Em 2 pessoas" value="2" />
        <Picker.Item label="3 Pessoas" value="3" />
        <Picker.Item label="4 Pessoas" value="4" />
        <Picker.Item label="5 Pessoas" value="5" />
        <Picker.Item label="6 Pessoas" value="6" />
        <Picker.Item label="Mais que 6 pessoas" value="6+" />
      </Picker>
    </Container>
  );
}


export default PickerItem;
