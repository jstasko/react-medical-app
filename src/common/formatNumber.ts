import numeral from 'numeral';

export const fNumber = (number) => {
  return numeral(number).format();
}
