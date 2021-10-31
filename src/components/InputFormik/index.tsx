import React, { useState } from 'react';
import { useField } from 'formik';

import { Container, TextInput, Icon } from './styles';
import { Text, TextInputProps } from 'react-native';

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
        placeholder={placeholder}
      />
      {touched && error && (
        <Text style={{ marginTop: -10, marginBottom: 10 }}>{error}</Text>
      )}
    </Container>
  );
};

export default Input;
