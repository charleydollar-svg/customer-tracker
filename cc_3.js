let customers = [
  {name: 'Alice', email: 'alice@example.com', purchases: 5 },
  {name: 'Bob', email: 'bob@example.com', purchases: 3 },
  {name: 'Charlie', email: 'charlieburger@example.com', purchases: 8 },
];

customers.push({name: 'Diana', email: 'diana@example.com', purchases: 2}); //new customer
customers.shift();

let newPurchase = 'purchases';
customers[0][newPurchase] += 10; // Bob made a new purchase

customers.forEach(myFunction);

console.log()