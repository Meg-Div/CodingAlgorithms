function tournamentWinner(competitions, results) {
  obj = {};
  for (let i = 0; i < competitions.length; i++) {
    if (results[i] === 1) {
      if (obj[competitions[i][0]]) {
        obj[competitions[i][0]] += 3;
      } else {
        obj[competitions[i][0]] = 3;
      }
    } else {
      if (obj[competitions[i][1]]) {
        obj[competitions[i][1]] += 3;
      } else {
        obj[competitions[i][1]] = 3;
      }
    }
  }
  console.log(Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0]);
}

competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

results = [0, 0, 1];

tournamentWinner(competitions, results);
