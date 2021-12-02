INSERT INTO salesman_information
VALUES (DEFAULT,'Malkuth', 'Elijah', 4);
INSERT INTO salesman_information
VALUES (DEFAULT,'Yesod', 'Gabirel', 15);
INSERT INTO salesman_information
VALUES (DEFAULT,'Hod', 'Michelle', 12);
INSERT INTO salesman_information
VALUES (DEFAULT,'Netzach', 'Giovanni', 10);
INSERT INTO salesman_information
VALUES (DEFAULT,'Tiphereth', 'Lisa', 1);
INSERT INTO salesman_information
VALUES (DEFAULT,'Geburah', 'Kali', 14);
INSERT INTO salesman_information
VALUES (DEFAULT,'Chesed', 'Daniel', 7);
INSERT INTO salesman_information
VALUES (DEFAULT,'Binah', 'Garion', 16);
INSERT INTO salesman_information
VALUES (DEFAULT,'Hokma', 'Benjamin', 27);
INSERT INTO salesman_information
VALUES (DEFAULT,'Roland', 'Charles', 10);

INSERT INTO mechanic_information
VALUES (DEFAULT,'Shulk', 'Monado', 6);
INSERT INTO mechanic_information
VALUES (DEFAULT,'Fiora', 'Mechon', 20);
INSERT INTO mechanic_information
VALUES (DEFAULT,'Reyn', 'Time', 2);
INSERT INTO mechanic_information
VALUES (DEFAULT,'Dunban', 'Blossom', 5);
INSERT INTO mechanic_information
VALUES (DEFAULT,'Melia', 'Antiqua', 16);
INSERT INTO mechanic_information
VALUES (DEFAULT,'Riki', 'Heropon', 8);
INSERT INTO mechanic_information
VALUES (DEFAULT,'Sharla', 'Gadot', 16);
INSERT INTO mechanic_information
VALUES (DEFAULT,'Mumkhar', 'Metal', 14);
INSERT INTO mechanic_information
VALUES (DEFAULT,'Rex', 'Driver', 16);
INSERT INTO mechanic_information
VALUES (DEFAULT,'Adam', 'Mythra', 18);

INSERT INTO customer_information
VALUES (DEFAULT, 'Iris', 'Sagan', '(932) 292-1448', '237 Edgemont Road', 'Derby', '67037', 'KS', 'United States');
INSERT INTO customer_information
VALUES (DEFAULT, 'Hitomi', 'Sagan', '(932) 292-1567', '237 Edgemont Road', 'Derby', '67037', 'KS', 'United States');
INSERT INTO customer_information
VALUES (DEFAULT, 'Ristuko', 'Enshu', '(417) 376-7221', '9229 North Hillside Street', 'Duluth', '30096', 'GA', 'United States');
INSERT INTO customer_information
VALUES (DEFAULT, 'Kaname', 'Date', '(568) 401-6285', '209 Kent Drive', 'Elgin', '60120', 'IL', 'United States');
INSERT INTO customer_information
VALUES (DEFAULT, 'So', 'Sejima', '(879) 331-9237', '7208 Meadow Dr.', 'Odenton', '21113', 'MD', 'United States');
INSERT INTO customer_information
VALUES (DEFAULT, 'Mizuki', 'Okiura', '(653) 307-6085', '9201 Ridgeview St.', 'Kernersville', '27284', 'NC', 'United States');
INSERT INTO customer_information
VALUES (DEFAULT, 'Moma', 'Kumakura', '(877) 696-8119', '233 Sunbeam Lane', 'Derby', '67037', 'KS', 'United States');
INSERT INTO customer_information
VALUES (DEFAULT, 'Ota', 'Matushita', '(640) 408-4874', '237 Edgemont Road', 'Temple Hills', '20748', 'MD', 'United States');
INSERT INTO customer_information
VALUES (DEFAULT, 'Takushi', 'Iburada', '(357) 491-7475', '502 Essex Rd.', 'Monsey', '10952', 'NY', 'United States');
INSERT INTO customer_information
VALUES (DEFAULT, 'Akane', 'Kurashiki', '(279) 875-7752', '32 E. Front Dr.', 'Hartford', '06106', 'CT', 'United States');

INSERT INTO car_information
VALUES (DEFAULT, 'sedan', 'toyota', 'camry', 1997, false, 'orange', 12000);
INSERT INTO car_information
VALUES (DEFAULT, 'sedan', 'hyundai', 'elytra', 2017, true, 'white', 18000);
INSERT INTO car_information
VALUES (DEFAULT, 'minivan', 'honda', 'odyssey', 2010, false, 'black', 20000);
INSERT INTO car_information
VALUES (DEFAULT, 'hatchback', 'jeep', 'cherokee', 2015, false, 'gray', 25000);
INSERT INTO car_information
VALUES (DEFAULT, 'convertible', 'tesla', 'model s', 2021, true, 'yellow', 50000);
INSERT INTO car_information
VALUES (DEFAULT, 'sedan', 'toyota', 'camry', 2002, false, 'purple', 47000);
INSERT INTO car_information
VALUES (DEFAULT, 'pickup', 'ford', 'explorer', 2021, true, 'black', 200000);
INSERT INTO car_information
VALUES (DEFAULT, 'smartcar', 'ford', 'coupe', 1987, false, 'white', 1000);
INSERT INTO car_information
VALUES (DEFAULT, 'sedan', 'kia', 'ultima', 2003, false, 'blue', 19000);
INSERT INTO car_information
VALUES (DEFAULT, 'pickup', 'honda', 'ridgeline', 2021, true, 'black', 16000);

INSERT INTO maintenance_report
VALUES (DEFAULT, 2, 3, 7, 'broken engine', '09-28-2021', '10-27-2021');
INSERT INTO maintenance_report
VALUES (DEFAULT, 2, 3, 7, 'broken engine part 2', '10-28-2021', '11-27-2021');
INSERT INTO maintenance_report
VALUES (DEFAULT, 6, 9, 4, 'flat tires', '12-01-2021', '01-27-2022');
INSERT INTO maintenance_report
VALUES (DEFAULT, 10, 7, 1, 'on fire', '6-19-2007', '10-15-2020');
INSERT INTO maintenance_report
VALUES (DEFAULT, 3, 3, 3, 'missing steering wheel', '03-19-2001', '10-27-2001');
INSERT INTO maintenance_report
VALUES (DEFAULT, 4, 7, 1, 'change blinker fluid', '06-03-2021', '06-04-2021');
INSERT INTO maintenance_report
VALUES (DEFAULT, 9, 8, 2, 'bullet holes', '09-28-2021', '09-28-2021');
INSERT INTO maintenance_report
VALUES (DEFAULT, 1, 5, 7, 'broken windshield', '01-13-1996', '01-13-2022');
INSERT INTO maintenance_report
VALUES (DEFAULT, 6, 8, 2, 'frozen', '01-28-2021', '01-29-2021');
INSERT INTO maintenance_report
VALUES (DEFAULT, 8, 6, 2, 'missing frame', '06-13-2021', '06-14-2021');

INSERT INTO sales_report
VALUES (DEFAULT, 2, 3, 2, '10-27-2021');
INSERT INTO sales_report
VALUES (DEFAULT, 3, 2, 3, '09-15-2021');
INSERT INTO sales_report
VALUES (DEFAULT, 1, 1, 3, '03-12-2021');
INSERT INTO sales_report
VALUES (DEFAULT, 10, 6, 7, '04-28-2021');
INSERT INTO sales_report
VALUES (DEFAULT, 9, 5, 5, '02-26-2007');
INSERT INTO sales_report
VALUES (DEFAULT, 8, 4, 7, '10-24-2021');
INSERT INTO sales_report
VALUES (DEFAULT, 7, 7, 7, '10-25-2021');
INSERT INTO sales_report
VALUES (DEFAULT, 6, 8, 10, '03-12-2022');
INSERT INTO sales_report
VALUES (DEFAULT, 5, 9, 10, '02-13-2009');
INSERT INTO sales_report
VALUES (DEFAULT, 4, 10, 10, '08-14-2021');
