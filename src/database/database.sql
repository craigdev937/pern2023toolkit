CREATE DATABASE pern2023;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE players(
    id uuid DEFAULT uuid_generate_v4(),
    PRIMARY KEY (id),
    title VARCHAR(255),
    first VARCHAR(255),
    last VARCHAR(255),
    age SMALLINT,
    info TEXT
);


