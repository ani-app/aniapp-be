CREATE SEQUENCE customer_types_id_seq;
CREATE TABLE IF NOT EXISTS CustomerTypes (
    id int NOT NULL DEFAULT nextval('customer_types_id_seq'),
    name varchar(30) NOT NULL,
    PRIMARY KEY (id)
);
ALTER SEQUENCE customer_types_id_seq OWNED BY CustomerTypes.id;
INSERT INTO CustomerTypes (name)
    VALUES ('admin'), ('customer');

CREATE SEQUENCE auth_id_seq;
CREATE TABLE IF NOT EXISTS Auth (
    id int NOT NULL DEFAULT nextval('auth_id_seq'),
    is_google_account boolean DEFAULT false,
    email varchar(60) NOT NULL UNIQUE,
    phone varchar(13) UNIQUE,
    password char(64),
    PRIMARY KEY (id)
);
ALTER SEQUENCE auth_id_seq OWNED BY Auth.id;
INSERT INTO Auth (is_google_account, email, phone) VALUES (true, 'tuncel.ahmet.berke@gmail.com', '+905530085020');

CREATE SEQUENCE customers_id_seq;
CREATE TABLE IF NOT EXISTS Customers (
    id int NOT NULL DEFAULT nextval('customers_id_seq'),
    auth_id int NOT NULL,
    username varchar(20) NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL,
    customer_type_id int NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_auth
        FOREIGN KEY(auth_id)
            REFERENCES Auth(id),
    CONSTRAINT fk_customer_type
        FOREIGN KEY(customer_type_id)
            REFERENCES CustomerTypes(id)
);
ALTER SEQUENCE customers_id_seq OWNED BY Customers.id;
INSERT INTO Customers (username, created_at, auth_id, customer_type_id)
    VALUES ('ahmetberke', CURRENT_TIMESTAMP, 1, 1);

CREATE SEQUENCE countries_id_seq;
CREATE TABLE IF NOT EXISTS Countries (
    id int NOT NULL DEFAULT nextval('countries_id_seq'),
    name varchar(40) NOT NULL,
    PRIMARY KEY (id)
);
ALTER SEQUENCE countries_id_seq OWNED BY Countries.id;

CREATE SEQUENCE cities_id_seq;
CREATE TABLE IF NOT EXISTS Cities (
    id int NOT NULL DEFAULT nextval('cities_id_seq'),
    name varchar(40) NOT NULL,
    country_id int NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_country
        FOREIGN KEY (country_id)
            REFERENCES Countries(id)
);
ALTER SEQUENCE countries_id_seq OWNED BY Cities.id;

CREATE SEQUENCE provinces_id_seq;
CREATE TABLE IF NOT EXISTS Provinces (
    id int NOT NULL DEFAULT nextval('provinces_id_seq'),
    name varchar(40) NOT NULL,
    city_id int NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_city_id
        FOREIGN KEY (city_id)
            REFERENCES  Cities(id)
);
ALTER SEQUENCE provinces_id_seq OWNED BY Provinces.id;

INSERT INTO Countries (name) VALUES ('Türkiye');
INSERT INTO Cities (name, country_id) VALUES ('İstanbul', 1);
INSERT INTO Cities (name, country_id) VALUES ('Koaceli', 1);
INSERT INTO Provinces (name, city_id)
VALUES ('Adalar', 1), ('Arnavutköy', 1), ('Ataşehir', 1), ('Avcılar', 1), ('Bağcılar', 1), ('Bahçelievler', 1), ('Bakırköy', 1),
('Başakşehir', 1), ('Bayrampaşa', 1), ('Beşiktaş', 1), ('Beykoz', 1), ('Beylikdüzü', 1), ('Beyoğlu', 1), ('Büyükçekmece', 1), ('Çatalca', 1),
('Çekmeköy', 1), ('Esenler', 1), ('Esenyurt', 1), ('Esenyurt', 1), ('Eyüpsultan', 1), ('Fatih', 1), ('Gaziosmanpaşa', 1), ('Güngören', 1),
('Kadıköy', 1), ('Kağıthane', 1), ('Kartal', 1), ('Küçükçekmece', 1), ('Maltepe', 1), ('Pendik', 1), ('Sancaktepe', 1), ('Sarıyer', 1),
('Silivri', 1), ('Sultanbeyli', 1), ('Sultangazi', 1), ('Şile', 1), ('Şişli', 1), ('Tuzla', 1), ('Ümraniye', 1), ('Üsküdar', 1), ('Zeytinburnu', 1),
('İzmit', 2), ('Gebze', 2);

CREATE SEQUENCE customer_profiles_id_seq;
CREATE TABLE IF NOT EXISTS CustomerProfiles (
    id int NOT NULL DEFAULT nextval('customer_profiles_id_seq'),
    customer_id int NOT NULL,
    firstname varchar(50),
    lastname varchar(50),
    photo varchar(50),
    province_id int NOT NULL,
    address varchar(150) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_customer
        FOREIGN KEY (customer_id)
            REFERENCES Customers(id)
);
ALTER SEQUENCE customer_profiles_id_seq OWNED BY CustomerProfiles.id;

CREATE SEQUENCE veterinaries_id_seq;
CREATE TABLE IF NOT EXISTS Veterinaries (
    id int NOT NULL DEFAULT nextval('veterinaries_id_seq'),
    auth_id int NOT NULL,
    name varchar(50) NOT NULL,
    address varchar(150) NOT NULL,
    province_id int NOT NULL,
    score int NOT NULL,
    is_open boolean NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_auth
        FOREIGN KEY (auth_id)
            REFERENCES Auth(id),
    CONSTRAINT fk_province
        FOREIGN KEY (province_id)
            REFERENCES Provinces(id)
);
ALTER SEQUENCE veterinaries_id_seq OWNED BY Veterinaries.id;

CREATE SEQUENCE veterinary_photos_id_seq;
CREATE TABLE IF NOT EXISTS VeterinaryPhotos (
    id int NOT NULL DEFAULT nextval('veterinary_photos_id_seq'),
    veterinary_id int NOT NULL,
    path varchar(16) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_veterinary
        FOREIGN KEY (veterinary_id)
            REFERENCES Veterinaries(id)
);
ALTER SEQUENCE veterinary_photos_id_seq OWNED BY VeterinaryPhotos.id;

CREATE SEQUENCE breed_types_id_seq;
CREATE TABLE IF NOT EXISTS BreedTypes (
    id int NOT NULL DEFAULT nextval('breed_types_id_seq'),
    name varchar(50),
    PRIMARY KEY (id)
);
ALTER SEQUENCE breed_types_id_seq OWNED BY BreedTypes.id;

CREATE SEQUENCE breeds_id_seq;
CREATE TABLE IF NOT EXISTS Breeds (
    id int NOT NULL DEFAULT nextval('breeds_id_seq'),
    name varchar(50) NOT NULL,
    breed_type_id int NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_breed_type
        FOREIGN KEY (breed_type_id)
            REFERENCES BreedTypes(id)
);
ALTER SEQUENCE breeds_id_seq OWNED BY Breeds.id;

CREATE TABLE IF NOT EXISTS Colours(
    name varchar(50) NOT NULL,
    code varchar(6) NOT NULL UNIQUE,
    PRIMARY KEY (name)
);

CREATE TABLE IF NOT EXISTS Genders(
    name varchar(50) NOT NULL UNIQUE,
    PRIMARY KEY (name)
);
INSERT INTO Genders VALUES ('erkek'), ('dişi');

CREATE SEQUENCE pets_id_seq;
CREATE TABLE IF NOT EXISTS Pets (
    customer_id int NOT NULL,
    id int NOT NULL DEFAULT nextval('pets_id_seq'),
    name varchar(50),
    created_at TIMESTAMP NOT NULL,
    birth_date TIMESTAMP,
    breed_id int,
    photo varchar(50),
    colour_code varchar(6),
    id_number char(15),
    gender varchar(50),
    PRIMARY KEY (id),
    CONSTRAINT fk_customer
        FOREIGN KEY (customer_id)
            REFERENCES Customers(id),
    CONSTRAINT fk_breed
        FOREIGN KEY (breed_id)
            REFERENCES Breeds(id),
    CONSTRAINT fk_colour
        FOREIGN KEY (colour_code)
            REFERENCES Colours(code),
    CONSTRAINT fk_gender
        FOREIGN KEY (gender)
            REFERENCES Genders(name)
);
ALTER SEQUENCE pets_id_seq OWNED BY Pets.id;

CREATE SEQUENCE treatment_types_id_seq;
CREATE TABLE IF NOT EXISTS TreatmentTypes (
    id int NOT NULL DEFAULT nextval('treatment_types_id_seq'),
    name varchar(50) NOT NULL,
    PRIMARY KEY (id)
);
ALTER SEQUENCE treatment_types_id_seq OWNED BY TreatmentTypes.id;

CREATE SEQUENCE veterinary_treatment_types_id_seq;
CREATE TABLE IF NOT EXISTS VeterinaryTreatmentTypes (
    id int NOT NULL DEFAULT nextval('veterinary_treatment_types_id_seq'),
    veterinary_id int NOT NULL,
    treatment_type_id int NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_veterinary
        FOREIGN KEY (veterinary_id)
            REFERENCES Veterinaries(id),
    CONSTRAINT fk_treatment_type
        FOREIGN KEY (treatment_type_id)
            REFERENCES TreatmentTypes(id)
);
ALTER SEQUENCE veterinary_treatment_types_id_seq OWNED BY VeterinaryTreatmentTypes.id;

CREATE SEQUENCE treatments_id_seq;
CREATE TABLE IF NOT EXISTS Treatments (
    id int NOT NULL,
    pet_id int NOT NULL,
    veterinary_id int NOT NULL,
    treatment_TIMESTAMP TIMESTAMP NOT NULL,
    treatment_type_id int NOT NULL,
    is_approved boolean DEFAULT false,
    is_completed boolean DEFAULT false,
    PRIMARY KEY (id),
    CONSTRAINT fk_pet
        FOREIGN KEY (pet_id)
            REFERENCES Pets(id),
    CONSTRAINT fk_veterinary
        FOREIGN KEY (veterinary_id)
            REFERENCES Veterinaries(id),
    CONSTRAINT fk_treatment_type
        FOREIGN KEY (treatment_type_id)
            REFERENCES TreatmentTypes(id)
);
ALTER SEQUENCE treatments_id_seq OWNED BY TreatmentTypes.id;