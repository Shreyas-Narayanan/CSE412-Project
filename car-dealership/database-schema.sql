CREATE DATABASE cse412project;

CREATE TABLE car_information(
    car_id SERIAL, 
    type TEXT,
    make TEXT,
    model TEXT,
    year INT,
    new BOOL,
    color TEXT,
    price REAL,
    PRIMARY KEY (car_id)
);

CREATE TABLE salesman_information(
    salesman_id SERIAL,
    first_name TEXT,
    last_name TEXT,
    years_worked INT,
    PRIMARY KEY (salesman_id)
);

CREATE TABLE customer_information(
    customer_id SERIAL,
    first_name TEXT,
    last_name TEXT,
    phone_number TEXT,
    address TEXT,
    city TEXT,
    postal_code TEXT,
    state TEXT,
    country TEXT,
    PRIMARY KEY (customer_id)
);

CREATE TABLE sales_report(
    sales_id SERIAL,
    car_id INT NOT NULL,
    customer_id INT NOT NULL,
    salesman_id INT NOT NULL,
    date DATE,
    FOREIGN KEY (car_id) REFERENCES car_information ON DELETE NO ACTION,
    FOREIGN KEY (customer_id) REFERENCES customer_information ON DELETE NO ACTION,
    FOREIGN KEY (salesman_id) REFERENCES salesman_information ON DELETE NO ACTION,    
    PRIMARY KEY (sales_id)
);

CREATE TABLE mechanic_information(
    mechanic_id SERIAL,
    first_name TEXT,
    last_name TEXT,
    years_worked INT,
    PRIMARY KEY (mechanic_id)
);

CREATE TABLE maintenance_report(
    ticket_id SERIAL,
    car_id INT NOT NULL,
    customer_id INT NOT NULL,
    mechanic_id INT NOT NULL,
    car_issue TEXT,
    date_received DATE,
    date_returned DATE,
    FOREIGN KEY (car_id) REFERENCES car_information ON DELETE NO ACTION,
    FOREIGN KEY (customer_id) REFERENCES customer_information ON DELETE NO ACTION,
    FOREIGN KEY (mechanic_id) REFERENCES mechanic_information ON DELETE NO ACTION,    
    PRIMARY KEY (ticket_id)
);