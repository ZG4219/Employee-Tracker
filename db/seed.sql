INSERT INTO departments (name)
VALUES ('Sales'), 
('Marketing'), 
('Engineering'), 
('Accountant'),
('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Salesperson', 50000, 1),
  ('Marketing Manager', 75000, 2),
  ('Software Engineer', 80000, 3),
  ('HR Manager', 90000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Doe', 2, NULL),
  ('Bob', 'Builder', 3, 2),
  ('Samantha', 'Smith', 4, NULL);
