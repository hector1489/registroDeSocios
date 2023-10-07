CREATE DATABASE socios;

CREATE TABLE socios (
  id        VARCHAR(36)     NOT NULL,
  nombre    VARCHAR(25)     NOT NULL,
  correo    VARCHAR(255)    NOT NULL,
  edad      INT             NOT NULL,
  cargo     VARCHAR(25)     NOT NULL,
  telefono  INT             NOT NULL,
  direccion VARCHAR(255)    NOT NULL,
  PRIMARY KEY (id)
);

