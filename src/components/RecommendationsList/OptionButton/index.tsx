import { useField } from 'formik';
import React, { memo } from 'react';
import { ImageURISource } from 'react-native';

import { Button, StyledImage } from './styles';

interface IOption {
  fieldName: string;
  link: ImageURISource;
}

const OptionButton: React.FC<IOption> = ({ fieldName, link }) => {
  const [field, , helpers] = useField(fieldName);

  return (
    <Button
      select={!field.value}
      onPress={() => {
        helpers.setValue(!field.value);
      }}>
      <StyledImage source={link} />
    </Button>
  );
};

export default memo(OptionButton);
