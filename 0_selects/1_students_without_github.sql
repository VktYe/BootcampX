/* select id, name, email, cohort_id from students where github = NULL ORDER BY cohort_id */

SELECT id, name, email, cohort_id 
FROM students 
WHERE github IS NULL 
ORDER BY cohort_id;