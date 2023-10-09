CREATE DATABASE socios;

CREATE TABLE socios (
  id        UUID DEFAULT uuid_generate_v4() NOT NULL,
  nombre    VARCHAR(25)     NOT NULL,
  correo    VARCHAR(255)    NOT NULL,
  edad      INT             NOT NULL,
  cargo     VARCHAR(25)     NOT NULL,
  telefono  VARCHAR(15)     NOT NULL,
  direccion VARCHAR(255)    NOT NULL,
  PRIMARY KEY (id)
);
