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

 