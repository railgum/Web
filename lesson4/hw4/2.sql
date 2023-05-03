-- create a table
CREATE TABLE groupmate (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    age INT NOT NULL,
    address TEXT
);
-- insert some values
INSERT INTO groupmate(name, age, address)
VALUES ('Святослав', 34, 'Москва'),
    ('Елена', 27, 'Ульяновск'),
    ('Евгений', 41, 'Омск'),
    ('Надежда', 18, 'Тверь'),
    ('Ольга', 29, 'Москва');
-- fetch some values
SELECT *
FROM groupmate
WHERE NOT address = 'Москва';