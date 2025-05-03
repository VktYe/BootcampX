/* Get the names of all of the students from a single cohort. 
select name and id 
order by name alphabetically
use any number of cohort_id*/

SELECT id, name 
FROM students 
WHERE cohort_id = 5
ORDER BY name;

