import { Input, Box } from '@chakra-ui/react';
import React, { useCallback } from 'react';

import { formatCurrency, formatNumberToCurrency } from '../util';

interface Props {
  value: string;
  type: 'header' | 'data';
  onChange: (newValue: string) => void;
}

const Cell: React.FC<Props> = ({ value, type, onChange }) => {
  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (ev) => {
      // try to format the currency string back to a number, for cleaner storage
      const formattedValue = formatNumberToCurrency(ev.target.value);
      onChange(formattedValue);
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
        onChange={handleOnChange}
        {...inputProps}
      />
    </Box>
  );
};

export default Cell;
