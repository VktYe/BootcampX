/* Get all of the students currently enrolled. 
SELECT name, id, and cohort_id.
Order by cohort_id.

if end-dat IS NULL - student is enrolled*/


SELECT name, id, cohort_id 
FROM students 
WHERE end_date IS NULL 
ORDER BY cohort_id;
