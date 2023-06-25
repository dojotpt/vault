
const students = [
  { name: "Paisley Parker", gpa: 4.0 },
  { name: "Lake Herr", gpa: 3.2 },
  { name: "Promise Lansing", gpa: 3.9 },
  { name: "Friar Park", gpa: 2.8 },
  { name: "Mason Amitie", gpa: 3.49 }
]

function getDeansList(studentList) {
  let deansList = [students.filter(this._gpa >= 3.5)];
  for(let i = 0; i < 6; i++) {

  }
}

console.log(getDeansList(students))