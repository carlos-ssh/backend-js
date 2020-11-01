CREATE DATABASE user_portal;

USE user_portal;

CREATE TABLE users(
  id_user INT(8) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name_user VARCHAR(100) NOT NULL,
  email VARCHAR(25) NOT NULL,
  kms DECIMAL (3,2) NOT NULL,
  data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE users;

INSERT INTO users(name_user, email, kms) values ('Carlos Robles', 'carlos.robles@gmail.com', '4.10');
SELECT * FROM users;