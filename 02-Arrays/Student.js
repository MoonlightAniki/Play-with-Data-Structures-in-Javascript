class Student {
  constructor(studentName, studentScore) {
    this.studentName = studentName;
    this.studentScore = studentScore;
  }

  toString() {
    return `Student(name: ${this.studentName}, score: ${this.studentScore})`;
  }
}

const Array = require('./Array');
const arr = new Array();
arr.addLast(new Student('Alice', 100));
arr.addLast(new Student('Bob', 66));
arr.addLast(new Student('Charlie', 88));
console.log(arr.toString());