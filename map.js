  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1,2,3,4,5];
let results = [];
for (let num of nums) {
  results.push(num*2);
}
console.log(results);

// Using map()
const multByTwo = function (num) {
  return num * 2;
};
const mapResults = nums.map(multByTwo);
console.log(mapResults);


// Simplified w/ map()
const mapResults2 = nums.map(function (num) { return num * 2;});
console.log(mapResults2);

// Simplfied w/ map() + arrow function
const simplified = nums.map(num => num * 2);
console.log(simplified);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

const studentsWithIdsObj = students.map((student) => { return { id : student.id, name : student.name};});
console.log(studentsWithIdsObj);

/*const studentsWithIdsAge = students.map((student) => { return { id : student.id, name : student.name};});
console.log(studentsWithIdsAge);*/


const func = function(student) {
  const ages = [32, 26, 28];
  console.log(student);
  const age = ages[student.id-1];
  
  let obj = {...student, Age: age};
  console.log(obj);
  return obj

} 
const studentsWithIdsAge = students.map(func());
console.log(studentsWithIdsAge);