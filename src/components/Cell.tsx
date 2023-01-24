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
      onChange(ev.target.value);
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

  const possibleNumber = Number(value);

  const formattedValue = !isNaN(possibleNumber) ? formatCurrency(possibleNumber) : value;

  return (
    <Box>
      <Input
        value={formattedValue}
        borderRadius={0}
        width="full"
        onChange={onChangeHandler}
        {...inputProps}
      />
    </Box>
  );
};

export default Cell;
