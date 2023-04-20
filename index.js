// prompt
const studentGrades = [];

for (let i = 0; i < 5; i++) {
  const name = prompt(`Enter name of student ${i + 1}:`);
  const participationGrade = [];
  for (let j = 0; j < 5; j++) {
    const grade = parseInt(prompt(` Please enter class participation grade ${j + 1} for ${name}:`));
    participationGrade.push(grade);
  }
  const participationAverage = computeAverage(participationGrade);

  const summativeGrades = [];
  for (let j = 0; j < 3; j++) {
    const grade = parseInt(prompt(`Please enter summative grade ${j + 1} for ${name}:`));
    summativeGrades.push(grade);
  }
  const summativeAverage = computeAverage(summativeGrades);

  const finalExamGrades = [];
  for (let j = 0; j < 3; j++) {
    const grade = parseInt(prompt(`Please enter final exam grade ${j + 1} for ${name}:`));
    finalExamGrades.push(grade);
  }
  const finalExamAverage = computeAverage(finalExamGrades);

  const average = (participationAverage + summativeAverage + finalExamAverage) / 3;
  const grade = computeGrade(average);

  studentGrades.push({
    name: name,
    classParticipation: participationAverage,
    summativeGrade: summativeAverage,
    finalExamGrade: finalExamAverage,
    grade: average.toFixed(2),
    letterGrade: grade,
  });
}

// to identify the grade of the student 
for (let i = 0; i < studentGrades.length; i++) {
  const student = studentGrades[i];

  console.log(`${student.name}:`);
  console.log(`Class Participation: ${student.classParticipation}`);
  console.log(`Summative Grade: ${student.summativeGrade}`);
  console.log(`Final Exam Grade: ${student.finalExamGrade}`);
  console.log(`Grade: ${student.grade} (${student.letterGrade})`);
  console.log();
}

function computeAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

// grades 
function computeGrade(average) {
  if (average >= 90) {
    return "A";
  } else if (average >= 90 && average < 100) {
    return "B";
  } else if (average >= 80 && average < 89) {
    return "C";
  } else if (average >= 70 && average < 79) {
    return "D";
  } else if (average >= 60 && average < 69) {
    return "F";
  }
}


