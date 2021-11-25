EXERCÍCIOS AULA 46 - APROFUNDAMENTO SQL:

EXERÍCIO 1:
A) ALTER TABLE Actor DROP COLUMN salary;
Esse comando excluirá a coluna de salário

B) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
Esse comando trocará o nome da coluna gender por sex.

C) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
Esse comando aumentará de 6 para 255 caracteres possíveis para o preenchimento da categoria gênero. 

D) ALTER TABLE Atores CHANGE gênero gênero VARCHAR(100);

EXERCÍCIO 2:
A) UPDATE Atores SET nome = "Alice Braga" WHERE id = "003";
UPDATE Atores SET aniversário = "1983/04/15" WHERE id = "003";

B)UPDATE Atores SET nome = "JULIANA PAES" WHERE id = "005";
UPDATE Atores SET nome = "Juliana Paes" WHERE id = "005";

C) UPDATE Atores SET nome = "Fernanda Montenegro", aniversário = "1938-02-10", salário = 600000, gênero = "female" WHERE id = "005";

D) UPDATE Atores SET profissão = "Atriz" WHERE id = "005";
Mensagem de erro: Error Code: 1054. Unknown column 'profissão' in 'field list' 
Fala que a coluna profissão não consta na lista

EXERCÍCIO 3: 
A) DELETE FROM Atores WHERE nome = "Fernanda Montenegro";

B) DELETE FROM Atores WHERE gênero = "male" AND salário > 1000000;

EXERCÍCIO 4:
A) SELECT MAX(salário) FROM Atores;

B) SELECT MIN(salário) FROM Atores WHERE gênero = "female";

C) SELECT COUNT(*) FROM Atores WHERE gênero = "female";

D) SELECT SUM(salário) FROM Atores;

EXERCÍCIO 5:
A) Mostrou uma tabela com duas linhas, a primeira linha era a quantidade de itens (atores) do gênero masculino e a segunda a linha a quantidade de itens (atrizes) do genêro feminino.

B) SELECT id, nome FROM Atores ORDER BY nome DESC 
??????????? (e se eu quisesse ordenar apenas os atores do gênero feminino, como faria? Tentei acrescentar no final da query um "WHERE gênero = "female", mas não deu certo) ????????????????????

C) SELECT * FROM Atores ORDER BY salário ASC;

D) SELECT * FROM Atores ORDER BY salário DESC LIMIT 3;

E) SELECT AVG(salário) FROM Atores GROUP BY gênero;
    SELECT AVG(salário), gênero FROM Atores GROUP BY gênero;

EXERCÍCIO 6: 
A) ALTER TABLE Filmes ADD data_limite_cinema DATE;

B) ALTER TABLE Filmes CHANGE avaliação avaliação FLOAT;

C) UPDATE Filmes SET data_limite_cinema = "2022/01/15" WHERE id = "001";
UPDATE Filmes SET data_limite_cinema = "2021/07/03" WHERE id = "002";

D) DELETE FROM Filmes WHERE id = "003";
UPDATE Filmes SET sinopse = "Dona Flor é apaixonada por dois homens diametralmente opostos" WHERE id = "003";
Mostra que deu certo, porém não aparece nenhum dado novo na tabela, já que a linha inteira foi excluída. Como explicaram, UPDATE basicamente sempre gerará uma mensagem de sucesso, mesmo nada sendo alterado. 

EXERCÍCIO 7:
SELECT COUNT(*) FROM Filmes WHERE avaliação > "7.5"; //CONTAGEM
SELECT COUNT(*) FROM Filmes WHERE data_limite_cinema > CURDATE();
SELECT COUNT(*) FROM Filmes WHERE data_limite_cinema <> CURDATE();
SELECT AVG(avaliação) FROM Filmes; // MÉDIA 
SELECT MAX(avaliação), título FROM Filmes; //Não deu certo. Como eu faço para ver o título desse meu filme que recebe nota máxima? 
Tentei assim: SELECT MAX(avaliação), título FROM Filmes GROUP BY título; // Não deu certo.
SELECT MIN(avaliação) FROM Filmes;

EXERCÍCIO 8:
A) SELECT * FROM Filmes ORDER BY título ASC; // SELECT * FROM Movie ORDER BY title;

B) SELECT * FROM Filmes ORDER BY título DESC LIMIT 2; // SELECT * FROM Movie ORDER BY title LIMIT 5;

C) SELECT * FROM Filmes ORDER BY data_limite_cinema DESC LIMIT 3; // SELECT * FROM Movie WHERE release_date < CURDATE()ORDER BY release_date DESC LIMIT 3;

D) SELECT * FROM Filmes ORDER BY avaliação DESC LIMIT 3; // 