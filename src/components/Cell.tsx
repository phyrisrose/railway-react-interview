import { Input, Box } from '@chakra-ui/react';
import React, { useCallback } from 'react';

interface Props {
  value: string;
  type: 'header' | 'data';
  onChange: (newValue: string) => void;
}

const Cell: React.FC<Props> = ({ value, type, onChange }) => {
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (ev) => {
      onChange(ev.target.value);
    },
    [onChange],
  );

  const headerProps = {
    fontWeight: 'bold',
  };

  const inputProps = type === 'header' ? headerProps : {};

  return (
    <Box>
      <Input
        value={value}
        borderRadius={0}
        width="full"
        onChange={onChangeHandler}
        {...inputProps}
      />
    </Box>
  );
};

export default Cell;
