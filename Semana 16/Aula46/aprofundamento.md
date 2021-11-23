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
