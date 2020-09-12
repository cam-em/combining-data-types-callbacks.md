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