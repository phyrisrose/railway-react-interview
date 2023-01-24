/**
 * Format a number as currency
 *
 * @param input
 * @returns
 */
export const formatCurrency = (input: number) => {
  const dollarUSLocale = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  return dollarUSLocale.format(input);
};
