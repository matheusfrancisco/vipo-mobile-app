import { useFormikContext } from 'formik';
import React, { useCallback } from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import Button from '../Button';

interface ISubmitButton extends RectButtonProperties {
  children?: string;
}

const SubmitButton: React.FC<ISubmitButton> = ({ onPress, ...props }) => {
  const formik = useFormikContext();

  const handlePress = useCallback(
    (pointerInside: boolean) => {
      formik.submitForm();
      if (onPress) {
        onPress(pointerInside);
      }
    },
    [onPress, formik],
  );

  return <Button {...props} onPress={handlePress} />;
};

export default SubmitButton;
