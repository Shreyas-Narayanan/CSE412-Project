CREATE DATABASE cse412project;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE car_information(
    car_id uuid DEFAULT uuid_generate_v4 (), 
    description TEXT,
    make TEXT,
    model TEXT,
    year INT,
    new BOOL,
    color TEXT,
    price INT,
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
    car_id uuid,
    customer_id INT,
    salesman_id INT,
    date DATE,
    FOREIGN KEY (car_id) REFERENCES car_information,
    FOREIGN KEY (customer_id) REFERENCES customer_information,
    FOREIGN KEY (salesman_id) REFERENCES salesman_information,    
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
    car_id uuid,
    customer_id INT,
    mechanic_id INT,
    car_issue TEXT,
    date_received DATE,
    date_returned DATE,
    FOREIGN KEY (car_id) REFERENCES car_information,
    FOREIGN KEY (customer_id) REFERENCES customer_information,
    FOREIGN KEY (mechanic_id) REFERENCES mechanic_information,    
    PRIMARY KEY (ticket_id)
);

