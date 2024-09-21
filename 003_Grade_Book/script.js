// my approach
// function getAverage(scores) {
//   let totalMarks = 0;
//   for (let i = 0; i < scores.length; i++) {
//     totalMarks = totalMarks + scores[i];
//     console.log(totalMarks);
//   }
//   return totalMarks / scores.length;
// }

//learning: use  for of loop to traversing over an array insted for loop
//   i used variableName "totalMarks"but here "sum" should be better
function getAverage(scores) {
  let sum = 0;
  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
}

//******************************************************** */
// my appraoach
// function getGrade(score) {
//   let grade;
//   if (score === 100) {
//     grade = "A++";
//   } else if (score >= 90 && score <= 99) {
//     grade = "A";
//   } else if (score >= 80 && score <= 89) {
//     grade = "B";
//   } else if (score >= 70 && score <= 79) {
//     grade = "C";
//   } else if (score >= 60 && score <= 69) {
//     grade = "D";
//   } else if (score >= 0 && score <= 59) {
//     grade = "F";
//   }
//   return grade;
// }

// my approach-2
// function getGrade(score) {
//   let grade;
//   if (score === 100) {
//     grade = "A++";
//   } else if (score >= 90) {
//     grade = "A";
//   } else if (score >= 80) {
//     grade = "B";
//   } else if (score >= 70) {
//     grade = "C";
//   } else if (score >= 60) {
//     grade = "D";
//   } else {
//     grade = "F";
//   }
//   return grade;
// }

//learning:i was creating variable grade but its not necessary we can directly return value

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
//******************************************************** */

// function hasPassingGrade(score) {
//   const grade = getGrade(score);
//   if (grade === "F") {
//     return false;
//   } else {
//     return true;
//   }
// }

//learning:use comparsion operator to return true/false directly
           //very good function name here hasPassingGrade
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}
//******************************************************** */

function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);
  const passedOrFailed = hasPassingGrade(studentScore) ? "passed" : "failed";
  return `"Class average: ${average}. Your grade: ${grade}. You ${passedOrFailed} the course."`;
}



