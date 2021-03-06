// 1. Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
    crownNames: ['white', 'blue', 'magenta', 'green']
  }
  
  // 2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
  const bottle = {
    cap: {
      material: 'metal',
      color: 'cyan'
    }
  }
  
  console.log(bottle.cap.material);
  
  // 3. Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
  let receipt = [
    {name: 'Pickles', price: 2},
    {name: 'Doritos', price: 3}
  ];
  
  console.log(receipt[0].name);
  
  // 4. Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.
  
  let apartmentBuilding = [
    ['Josh', 'Michael', 'Jimmy'],
    'toothpicks',
    'speakers'
  ];
  
  console.log(apartmentBuilding[0][0])


  // 1. Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).
const knit = () => {
    return {
      item: 'scarf',
      size: '6ft'
    }
  }
  
  console.log(knit().item);
  
  // 2. Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.
  const crayonSelector = () => {
    return crayonBox;
  }
  
  console.log(crayonSelector().crownNames[0]);
  // 3. Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function
  
  const powerButton = () => {
    const options = () => {
      console.log('Select a song');
    }
    return options();
  }
  
  console.log(powerButton());

  // Model a Vending Machine Model a vending machine

// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack
const vendingMachine = {
    snacks: [
      {name: 'Pretzels', price: 2},
      {name: 'Dark Chocolate', price: 5},
      {name: 'Cashews', price: 6},
    ],
    vend: (num)=>{
      return vendingMachine.snacks[num].name;
    }
  }
  
  console.log(vendingMachine.vend(0));



  