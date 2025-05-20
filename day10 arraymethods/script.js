const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  {id:3,name:'lob',age:45}
];

//Create an array of usernames in uppercase.

const arr = users.map((user)=>{
  return user.name.toUpperCase();
})

console.log(arr)

//Add a new property isAdult (true if age ≥ 18) to each user.

const newArr = users.map(user=>{
  if(user.age>18){
    user.isAdult = true;
    return user
  }
    else {
     isAdult = false;
     return user
    }
  
})

console.log(newArr)


//Filter
// ✅ 2. filter() – Selecting Specific Items
// Goal: Use filter() to return items that meet a condition.

// Practice Questions:

// From an array of products:

const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Mouse', price: 25 },
]
// Get all products priced above ₹100.

let pod = products.filter(item =>{
  
    return item.price>100;
})
console.log(pod)

// Get all products whose name includes the letter "o".

let pod2 = products.filter(item =>{
  return item.name.toUpperCase().includes("O");
})
console.log(pod2);


// ✅ 3. reduce() – Accumulating Values
// Goal: Use reduce() to combine elements into a single value.

// Practice Questions:

// Given this array of transactions:

// const transactions = [
//   { id: 1, amount: 100 },
//   { id: 2, amount: -50 },
// ];
// Calculate the total balance.

// Count how many transactions are positive.

// ✅ 4. find() – Getting the First Match
// Goal: Use find() to locate the first item that matches a condition.

// Practice Questions:

// Given:

// const users = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
// ];
// Find the user with the name 'Bob'.

// Find the first user whose name starts with "A".





//for each

const students = [
  { name: 'Anu', score: 85 },
  { name: 'Ravi', score: 92 },
];


// Log each student’s name and score.

// Add 5 bonus marks to each student and print the new score.

 students.forEach((student)=>{
  console.log(`hello my name is ${student.name} and my score is ${student.score}`)
})

students.forEach((student)=>{
  console.log(student.score+5)
})





