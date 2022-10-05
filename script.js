const submissions = [
  {
    name: "Jane",
    score: 95,
    date: 2020 - 01 - 24,
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: 2018 - 05 - 14,
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: 2019 - 07 - 05,
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: 2020 - 04 - 22,
    passed: true,
  },
];
const addSubmission = (array, newName, newScore, newDate) => {
  let newPassed = null;
  if (newScore >= 60) {
    newPassed = true;
  } else {
    newPassed = false;
  }
  const studentInfo = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newPassed,
  };
  array.push(studentInfo);
};
addSubmission(submissions, "James", 100, "2022-03-05");
addSubmission(submissions, "Chico", 90, "2022-03-05");
console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

const deleteSubmissionByName = (array, nameToDelete) => {
  let index = null;
  index = array.findIndex((studentInfo) => {
    return studentInfo.name === nameToDelete;
  });
  if (index !== -1) {
    deleteSubmissionByIndex(array, index);
  } else {
    console.log(`${nameToDelete} is not in ${array}`);
  }
};
deleteSubmissionByName(submissions, "James");
console.log(submissions);

const editSubmission = (array, index, score) => {
  array[index].score = score;
};

editSubmission(submissions, 4, 96);
console.log(submissions);

const findSubmissionByName = (array, name) => {
  if (
    array.some((studentInfo) => {
      return studentInfo.name === name;
    })
  ) {
    return array.find((studentInfo) => {
      return studentInfo.name === name;
    });
  } else {
    console.log(`${name} was not found in ${array}`);
  }
};
console.log(findSubmissionByName(submissions, "Chico"));

const findLowestScore = (array) => {
  let lowestScore = 101;
  let index = null;
  array.forEach((studentInfo) => {
    lowestScore =
      lowestScore < studentInfo.score ? lowestScore : studentInfo.score;
  });
  index = array.findIndex((studentInfo) => {
    return studentInfo.score === lowestScore;
  });
  return array[index];
};
console.log(findLowestScore(submissions));

const findAverageScore = (array) => {
  let sum = 0;
  for (studentInfo of array) {
    sum += studentInfo.score;
    // console.log(sum);
  }
  let average = sum / array.length;
  return average;
};

console.log(`The average score is ` + findAverageScore(submissions));

const filterPassing = (array) => {
  let passing = array.filter((studentInfo) => {
    return studentInfo.passed === true;
  });
  return passing;
};

console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  let filtered = array.filter((studentInfo) => {
    return studentInfo.score >= 90;
  });
  return filtered;
};
console.log(filter90AndAbove(submissions));

const createRange = (start, end) => {
  let range = [];
  for (let i = 0; i + start <= end; i++) {
    range.push(i + start);
  }
  return range;
};
console.log(createRange(2, 5));

const countElements = (array) => {
  const newObject = {};
  return newObject;
};
