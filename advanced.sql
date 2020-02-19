# 1.
SELECT firstname, lastname, age FROM Person;

# 2. All people who have a kingdom
SELECT p.firstname, p.lastname, k.name as kingdom_name from Person as p
JOIN Kingdom as k ON p.kingdom_id=k.id;

# 3. All people with their kingdoms even if they have none
SELECT p.firstname, p.lastname, k.name as kingdom_name from Person as p
LEFT JOIN Kingdom as k ON p.kingdom_id=k.id;

# 4. Average age of all people
SELECT AVG(age) FROM Person;

# 5. Number of people per kingdom
SELECT k.name, COUNT(p.firstname) FROM Person as p
RIGHT JOIN Kingdom as k ON p.kingdom_id=k.id
GROUP BY k.id;

# 6. Average age by role
SELECT r.role, AVG(p.age) FROM Person as p
JOIN Role as r ON p.role_id=r.id
GROUP BY r.role;

# 7. Average age of all people who are not magicians
SELECT AVG(p.age) FROM Person as p
JOIN Role as r ON p.role_id=r.id
WHERE r.role!='magicien';

# 8. All people with their role & kingdom
SELECT p.firstname, p.lastname, r.role, k.name FROM Person as p
LEFT JOIN Role as r ON p.role_id=r.id
LEFT JOIN Kingdom as k ON p.kingdom_id=k.id;

# 9. Show all kingdoms with at least 2 people
SELECT k.name FROM Kingdom as k
WHERE 1 < (SELECT COUNT(*) FROM Person as p WHERE p.kingdom_id=k.id);