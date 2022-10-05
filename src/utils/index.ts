export const formatNumStr2DecimalPlaces = (numStr: string): string => {
  return parseFloat(numStr).toFixed(2);
};
