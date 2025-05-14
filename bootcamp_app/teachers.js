const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
});

// Arguments from command line
cohortName = process.argv[2] || "JUL02";
const queryString = `
  SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM assistance_requests
  JOIN teachers ON teachers.id = teacher_id
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  ORDER BY teacher;
  `
// Store all potentially malicious values in an array.
const values = [`%${cohortName}%`];

pool
  .query(queryString, values)
  .then((res) => {
    res.rows.forEach((row) => {
      console.log(
        `${row.cohort}: ${row.teacher}`
      );
    });
  })
  .catch((err) => console.error("query error", err.stack));