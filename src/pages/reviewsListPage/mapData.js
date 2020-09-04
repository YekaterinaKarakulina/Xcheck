const getSumGrades = (grades) => {
  const arrGrades = [];
  const gradesItems = Object.values(grades);
  gradesItems.forEach((item) => arrGrades.push(item.score));
  const sum = arrGrades.reduce((a, b) => a + b);
  return sum;
};

const mapData = (databaseData) => {
  const { id, author, state, task } = databaseData;
  const grades = databaseData.grade.items;
  const grade = getSumGrades(grades);

  return {
    key: id,
    title: id,
    author,
    state,
    task,
    grade,
  };
};

export default mapData;
