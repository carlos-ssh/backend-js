CREATE DATABASE user_portal;

USE user_portal;

CREATE TABLE users(
  id_user INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name_user VARCHAR(100) NOT NULL,
  email VARCHAR(25) NOT NULL,
  kms DECIMAL (3,2) NOT NULL,
  data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE users;

INSERT INTO users(name_user, email, kms) values('Angel Enriquez', 'a.enriquez@gmail.com', '4.10');

SELECT * FROM users;