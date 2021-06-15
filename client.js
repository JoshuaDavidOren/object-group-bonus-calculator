const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];



function loopFun(employees) {
  for (i = 0; i < employees.length; i++) {
    console.log(newObject(employees[i].name, employees[i].annualSalary, employees[i].reviewRating));

  }
}

console.log(employees);

loopFun(employees)

function newObject(eachPerson, anSalery, revRating) {
  console.log('in new object', eachPerson);
if (revRating === 1 || 2  let percentage = 0;)
else if revRating === 3 let percentage = .04;)
  const thing = {
    name: eachPerson,
    bonus: anSalery / 1 + anSalery * percentage
  }
  return thing
}
