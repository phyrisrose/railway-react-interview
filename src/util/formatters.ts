/**
 * Format a number as currency
 *
 * @param input amount to format
 * @returns a formatted numeric string in USD
 */
export const formatCurrency = (input: number) => {
  const dollarUSLocale = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  return dollarUSLocale.format(input);
};

/**
 * Formats a currency string to a number
 *
 * @todo this is currently rounding up to two decimal points. May need a slightly better UX
 *
 * @param input
 * @returns a number, or an original string, if conversion is not possible
 */
export const formatNumberToCurrency = (input: string) => {
  const strippedDollarSign = input.replace('$', '');

  const possibleNumber = Number(strippedDollarSign);

  return !isNaN(possibleNumber) ? formatCurrency(possibleNumber) : input;
};
