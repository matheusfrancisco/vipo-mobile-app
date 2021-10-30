import React, { useState } from 'react';
import { Text, TextInputProps } from 'react-native';

import { useField } from 'formik';

import { Container, TextInput, Icon } from './styles';

interface InputProps {
  name: string;
  icon: string;
  fullWidth?: boolean;
  require?: boolean;
  textContentType?: TextInputProps['textContentType'];
  keyboardType?: TextInputProps['keyboardType'];
  placeholder?: TextInputProps['placeholder'];
  autoCapitalize?: TextInputProps['autoCapitalize'];
  secureTextEntry?: TextInputProps['secureTextEntry'];
  multiline?: boolean;
}

const Input: React.FC<InputProps> = ({ icon, name, require, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const [focused, setFocus] = useState(false);

  const placeholder =
    props.placeholder && `${props.placeholder}${require ? ' *' : ''}`;

  return (
    <Container isFocused={focused} isErrored={!!meta.error}>
      <Icon name={icon} size={20} />
      <TextInput
        placeholderTextColor="#666360"
        onFocus={() => setFocus(true)}
        onChangeText={helpers.setValue}
        value={field.value}
        defaultValue={field.value}
        onBlur={() => {
          setFocus(true);
          helpers.setTouched(true);
        }}
        {...props}
        placeholder={placeholder}
      />
      {meta.touched && meta.error && (
        <Text style={{ marginTop: -10, marginBottom: 10 }}>{meta.error}</Text>
      )}
    </Container>
  );
};

export default Input;
