import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { useField } from 'formik';

import { Container, TextInput, Icon } from './styles';

interface InputProps {
  name: string;
  icon: string;
}

const InputF: React.FC<InputProps> = ({ icon, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [focused, setFocus] = useState(false);
  const [errored, setError] = useState(false);

  return (
    <Container isFocused={focused} isErrored={!!errored}>
      <Icon name={icon} size={20} />
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        defaultValue={field.value}
        focused={focused}
        onBlur={() => {
          setFocus(true);
          helpers.setTouched(true);
        }}
        {...props}
      />
    </Container>
  );
};

export default InputF;
