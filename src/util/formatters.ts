/**
 * Format a number as currency
 *
 * @param input
 * @returns
 */
export const formatCurrency = (input: number) => {
  const dolarUSLocale = Intl.NumberFormat('en-US');

  return `${dolarUSLocale.format(input)}`;
};
