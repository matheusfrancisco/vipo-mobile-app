import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { useField } from 'formik';

import { Container, TextInput, Icon, TextError } from './styles';

interface InputProps {
  name: string;
  icon: string;
  fullWidth?: boolean;
  required?: boolean;
  textContentType?: TextInputProps['textContentType'];
  keyboardType?: TextInputProps['keyboardType'];
  placeholder?: TextInputProps['placeholder'];
  autoCapitalize?: TextInputProps['autoCapitalize'];
  secureTextEntry?: TextInputProps['secureTextEntry'];
  multiline?: boolean;
}

const Input: React.FC<InputProps> = ({ icon, name, required, ...props }) => {
  const [{ value }, { touched, error }, { setValue, setTouched }] = useField(
    name,
  );
  const [focused, setFocus] = useState(false);

  const placeholder =
    props.placeholder && `${props.placeholder}${required ? ' *' : ''}`;

  return (
    <Container isFocused={focused} isErrored={!!error}>
      <Icon name={icon} size={20} />
      <TextInput
        placeholderTextColor="#666360"
        onFocus={() => setFocus(true)}
        onChangeText={setValue}
        value={value}
        onBlur={() => {
          setFocus(true);
          setTouched(true);
        }}
        {...props}
        placeholder={placeholder}
      />
      {touched && error && <TextError>{error}</TextError>}
    </Container>
  );
};

export default Input;
