let numberOfSellUnits = 1000;
let productCost = 10;
let productSell = 15;
let tax = 0.2;
let totalCost = productCost + productCost * tax;
let profitPerUnit = productSell - totalCost;

if (productCost < 0 || productSell < 0 || tax < 0 || numberOfSellUnits < 0) {
  console.log("The entries values are not valid!");
  return;
}
console.log(
  `The total profit if ${numberOfSellUnits} units are sold is:`,
  profitPerUnit * numberOfSellUnits,
);
