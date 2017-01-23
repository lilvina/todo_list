DROP TABLE IF EXISTS lists;
CREATE TABLE lists (
  id SERIAL PRIMARY KEY,
  description VARCHAR,
  completed BOOLEAN default false
);