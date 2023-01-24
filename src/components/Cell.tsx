import { Input, Box } from '@chakra-ui/react';
import React, { useCallback } from 'react';

import { formatCurrency, formatNumberToCurrency } from '../util';

interface Props {
  value: string;
  type: 'header' | 'data';
  onChange: (newValue: string) => void;
  onMove: (direction: string) => void /** @todo make a type with the moving directions */;
}

const Cell: React.FC<Props> = ({ value, type, onChange, onMove }) => {
  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (ev) => {
      // try to format the currency string back to a number, for cleaner storage
      const formattedValue = formatNumberToCurrency(ev.target.value);
      onChange(formattedValue);
    },
    [onChange],
  );

  /**
   * Keys we care for:
   * * ArrowDown
   * * ArrowUp
   * * ArrowRight
   * * ArrowLeft
   *
   * @param ev
   */
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (ev) => {
    onMove(ev.key);
  };

  const headerProps = {
    fontWeight: 'bold',
  };

  const dataCellProps = {
    fontWeight: 'normal',
  };

  const inputProps = type === 'header' ? headerProps : dataCellProps;

  const possibleNumber = Number(value);

  const shouldFormatCell = type === 'data' && !isNaN(possibleNumber) && value !== '';
  const formattedValue = shouldFormatCell ? formatCurrency(possibleNumber) : value;

  return (
    <Box>
      <Input
        value={formattedValue}
        borderRadius={0}
        width="full"
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        {...inputProps}
      />
    </Box>
  );
};

export default Cell;
