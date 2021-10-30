import React from 'react';
import { useField, useFormikContext } from 'formik';

interface InputProps {
  name: string;
  options: string;
  fullWidth?: boolean;
  require?: boolean;
  textContentType?: TextInputProps['textContentType'];
  placeholder?: TextInputProps['placeholder'];
}

const Select = ({ name, options, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (set) => {
    const { value } = set.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: 'outlined',
    fullWidth: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {options[item]}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default Select;
