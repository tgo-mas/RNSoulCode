CREATE TABLE pessoas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  idade INT NOT NULL,
  sexo CHAR(1) NOT NULL,
  data_nascimento DATE NOT NULL
) ENGINE = InnoDB;

INSERT INTO pessoas (nome, idade, sexo, data_nascimento) VALUES
('Ana Oliveira', 25, 'F', '1997-05-10'),
('Beatriz Santos', 30, 'F', '1992-02-15'),
('Carlos Silva', 42, 'M', '1979-09-22'),
('Daniel Souza', 18, 'M', '2004-12-31'),
('Eduardo Costa', 50, 'M', '1973-06-05'),
('Fernanda Rocha', 29, 'F', '1993-11-20'),
('Gabriela Silva', 36, 'F', '1986-03-27'),
('Henrique Alves', 28, 'M', '1994-07-18'),
('Isabela Ferreira', 22, 'F', '2000-01-03'),
('João Lima', 45, 'M', '1978-12-05'),
('Kátia Silva', 33, 'F', '1989-08-15'),
('Leonardo Castro', 27, 'M', '1995-04-25'),
('Márcia Oliveira', 41, 'F', '1980-06-22'),
('Nathalia Ramos', 19, 'F', '2003-10-09'),
('Oliver Ribeiro', 37, 'M', '1986-09-16'),
('Paula Carvalho', 31, 'F', '1991-11-07'),
('Rafael Martins', 23, 'M', '1999-02-28'),
('Sofia Gomes', 26, 'F', '1996-08-12'),
('Tiago Ferreira', 39, 'M', '2000-04-23'),
('Viviane Souza', 35, 'F', '1987-12-10');

SELECT * FROM pessoas;
SELECT * FROM pessoas WHERE idade > 30;
SELECT * FROM pessoas WHERE idade < 25 OR sexo = 'F';
SELECT * FROM pessoas WHERE idade BETWEEN 20 AND 40;
SELECT * FROM pessoas WHERE nome LIKE('Jo%');
SELECT * FROM pessoas WHERE YEAR(data_nascimento) = 2000;
SELECT * FROM pessoas WHERE nome LIKE("%Silva%");
SELECT * FROM pessoas WHERE data_nascimento < "1990-01-01";
SELECT * FROM pessoas WHERE nome LIKE("%a");
SELECT * FROM pessoas WHERE NOT idade BETWEEN 25 AND 35;
SELECT * FROM pessoas WHERE nome LIKE("%João%") OR nome LIKE("%Maria%");
SELECT * FROM pessoas WHERE data_nascimento BETWEEN "1980-01-01" AND "1990-12-31";
SELECT * FROM pessoas WHERE nome LIKE("L%") AND idade > 25;
SELECT * FROM pessoas WHERE idade IN(20,21,22,23,24,25);
SELECT * FROM pessoas WHERE nome LIKE("%a") AND idade BETWEEN 25 AND 35;
SELECT * FROM pessoas WHERE (nome LIKE("G%") OR nome LIKE("R%")) AND sexo = 'M';

SELECT * FROM pessoas ORDER BY nome;
SELECT * FROM pessoas ORDER BY idade DESC;
SELECT * FROM pessoas ORDER BY data_nascimento;
SELECT * FROM pessoas ORDER BY nome LIMIT 5;
SELECT COUNT(*) AS Homens FROM pessoas WHERE sexo = 'M';
SELECT AVG(idade) AS Média FROM pessoas;
SELECT SUM(idade) AS Soma FROM pessoas;
SELECT SUM(idade) AS Soma_F FROM pessoas WHERE sexo = "F";
SELECT AVG(idade) AS Média_M FROM pessoas WHERE sexo = "M";
SELECT sexo, SUM(idade) AS Soma FROM pessoas GROUP BY sexo;
SELECT sexo, AVG(idade) AS Média FROM pessoas GROUP BY sexo;
SELECT MONTH(data_nascimento) AS Mês, COUNT(*) AS total FROM pessoas GROUP BY MONTH(data_nascimento) ORDER BY MONTH(data_nascimento);

 
