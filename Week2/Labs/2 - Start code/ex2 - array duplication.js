// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "An", age: 20 , lastName: "SeavPhov", batch: 1},
  { firstName: "Bình", age: 22 , lastName: "Chiling", batch: 2},
  { firstName: "Cẩm", age: 21, lastName: "Bo", batch: 2},
  { firstName: "An", age: 19, lastName: "Kumpi", batch: 1} 
];

/**
 * Update 1 student age, given his/her first name
 * @param {string} firstName - the student first name
 * @param {age} newAge  - the student new age
 * @param {string} lastName
 * @param {number} batch 
 */

function updateStudentAge(firstName, newAge, lastName, batch) {
  let student = STUDENTS_DATA.find((s, index) => (
    (s.firstName === firstName) && (s.lastName === lastName) && (s.batch === batch)
  ));
  if (student) {
    let oldAge = student.age;
    student.age = newAge;
    console.log(`${student.firstName} ${student.lastName}'s age has been updated from ${oldAge} to ${student.age}`);
  } else {
    console.log(`No student named ${student.firstName} ${student.lastName} in the list!`)
  }
}

// 1 - Update An age to 30
updateStudentAge("An", 30, "Kumpi", 1);

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA, null, 2));


