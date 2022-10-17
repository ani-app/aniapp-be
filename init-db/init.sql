CREATE TABLE IF NOT EXISTS CustomerTypes (
  id int NOT NULL,
  name char(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Customers (
  id INT NOT NULL,
  phone char(10),
  email char(50) NOT NULL,
  username char(20) NOT NULL,
  created_at date NOT NULL,
  password char(20) NOT NULL,
  customer_type_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_type_id) REFERENCES CustomerTypes(id)
);

CREATE TABLE IF NOT EXISTS CustomerProfile (
  id int NOT NULL,
  customer_id int NOT NULL,
  firstname char(50),
  lastname char(50),
  photo char(50),
  province_id int NOT NULL,
  address char(100) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES Customers(id)
);

