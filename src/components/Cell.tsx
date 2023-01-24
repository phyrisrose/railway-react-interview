import { Input, Box } from '@chakra-ui/react';
import React, { useCallback } from 'react';

import { formatCurrency } from '../util';

interface Props {
  value: string;
  type: 'header' | 'data';
  onChange: (newValue: string) => void;
}

const Cell: React.FC<Props> = ({ value, type, onChange }) => {
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (ev) => {
      const possibleNumber = Number(ev.target.value);

      const transformedValue = !isNaN(possibleNumber)
        ? formatCurrency(possibleNumber)
        : ev.target.value;

      onChange(transformedValue);
    },
    [onChange],
  );

  const headerProps = {
    fontWeight: 'bold',
  };

  const dataCellProps = {
    fontWeight: 'normal',
  };

  const inputProps = type === 'header' ? headerProps : dataCellProps;

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
