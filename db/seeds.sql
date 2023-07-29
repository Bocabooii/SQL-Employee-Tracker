INSERT INTO departments (department_name)
VALUES 
('Sales'),
('Operations'),
('Product Management'),
('Customer Support'),
('Quality Assurance'),
('Marketing'),
('Research and Development'),
('Finance'),
('Human Resources'),
('Information Technology');

INSERT INTO roles (title, salary, department_id)
VALUES 
('Sales Manager', 80000.00, 1),
('Operations Coordinator', 60000.00, 2),
('Product Manager', 100000.00, 3),
('Customer Support Specialist', 45000.00, 4),
('QA Engineer', 70000.00, 5),
('Marketing Analyst', 75000.00, 6),
('Software Developer', 90000.00, 7),
('Financial Analyst', 85000.00, 8),
('HR Generalist', 60000.00, 9),
('IT Administrator', 80000.00, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Alice', 'Smith', 1, 1),
('Bob', 'Johnson', 2, 1),
('Charlie', 'Williams', 3, 1),
('David', 'Jones', 4, 2),
('Eva', 'Brown', 5, 2),
('Frank', 'Miller', 6, 3),
('Grace', 'Davis', 7, 3),
('Henry', 'Wilson', 8, 4),
('Isabella', 'Taylor', 9, 5),
('Jack', 'Anderson', 10, 6);
