/**********/
// EXAMPLES
/**********/

// numbers: [number]
const numbers = [1, 2, 3];

// pricedItem: {price: number, taxable: boolean}
const pricedItem = {
  price: 10,
  taxable: false
};

// pricedItems: [{price: number, taxable: boolean}]
const pricedItems = [pricedItem, pricedItem];

// calculateTotalImperative: (items: [{price: number, taxable: boolean}], tax: number) -> number
const calculateTotalImperative = (items, tax) => {
  let result = 0;
  for (const item of items) {
    const {
      price,
      taxable
    } = item;
    if (taxable) {
      result += price * Math.abs(tax);
    }
    result += price;
  }
  return result;
};

/**********/
// ASSIGNMENT
/**********/
// let result = objArray.map(({ foo }) => foo)
// prices: (items: [{price: number}]) -> [number]
const prices = (items) => items.map(item => item.price);

// sum: (numbers: [number]) -> number
const sum = (numbers) => [...numbers].reduce((sum, number) => sum + number, 0);

// selectTaxable: (items: [{taxable: boolean}]) -> [{taxable: boolean}]
const selectTaxable = undefined; // TODO - Implementation

// applyTax: (prices: [number], tax: number) -> [number]
const applyTax = undefined; // TODO - Implementation

// baseSum: TODO - Type Signature
const baseSum = items => sum(prices(items));

// taxSum: TODO - Type Signature
const taxSum = (items, tax) => sum(applyTax(prices(selectTaxable(items)), tax));

// calculateTotalDeclarative: TODO - Type Signature
const calculateTotalDeclarative = (items, tax) =>
  baseSum(items) + taxSum(items, Math.abs(tax));

export default {
  prices,
  sum,
  selectTaxable,
  applyTax,
  baseSum,
  taxSum,
  calculateTotalDeclarative
};

// const items = [
//   {
//     price: 100,
//     taxable: false
//   },
//   {
//     price: 50,
//     taxable: false
//   },
//   {
//     price: 250,
//     taxable: true
//   }
// ]

// console.log(prices(items));