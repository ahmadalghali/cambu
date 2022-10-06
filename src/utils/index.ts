export const formatNumStr2DecimalPlaces = (numStr: string | number): string => {
  return parseFloat("" + numStr).toFixed(2);
};
