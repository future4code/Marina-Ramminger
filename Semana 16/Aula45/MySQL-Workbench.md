USE `maryam-marina-ramminger`;

CREATE TABLE Atores (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    salário FLOAT NOT NULL,
    aniversário DATE NOT NULL,
    gênero VARCHAR(6) NOT NULL
);
-- EXERCÍCIO 1:
-- A)
-- varchar: serve para declarar strings de no máximo n caracteres
-- date: representa uma data (yyyy-mm-dd)
-- not null: exige preenchimento

SHOW DATABASES;
SHOW TABLES;
-- B) Não entendi bem o obejtivo;
DESCRIBE Atores;
-- C) Aparece a tabela criada com uma coluna para as categorias, outra para o tipo esperado, o valor e a chave. 

INSERT INTO Atores (id, nome, salário, aniversário, gênero)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Atores (id, nome, salário, aniversário, gênero)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

INSERT INTO Atores (id, nome, salário, aniversário, gênero)
VALUES(
  "002", 
  "Camila Pitanga",
  1200000,
  "1977-06-14", 
  "female"
);
-- B) Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY' 
-- A chave é única, não pode se repitir, por isso o erro. 

INSERT INTO Atores (id, nome, salário)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
-- C) Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1

INSERT INTO Atores (id, nome, salário, aniversário, gênero)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Atores (id, nome, salário, aniversário, gênero)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
-- E) Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'aniversário' na linha 1;

INSERT INTO Atores (id, nome, salário, aniversário, gênero)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

SHOW TABLES;
SHOW DATABASES;
DESCRIBE Atores;
SELECT * FROM Atores;
INSERT INTO Atores (id, nome, salário, aniversário, gênero)
VALUES(
  "004", 
  "Camila Pitanga",
  1200000,
  "1977-06-14", 
  "female"
);
INSERT INTO Atores (id, nome, salário, aniversário, gênero)
VALUES(
  "006", 
  "Wagner Moura",
  1800000,
  "1976-06-27", 
  "male"
);
SELECT * FROM Atores;
-- Mesmo criando novos atores com ids desordenados, na hora de mostrar a tabela ele mostra de forma ordenada
-- Sendo assim, não precisamos nos preocupar em colocar id fora de ordem

-- EXERCÍCIO 3: 
SELECT * from Atores WHERE gênero = "female";
SELECT salário from Atores WHERE nome = "Tony Ramos";
SELECT nome, salário from Atores WHERE nome = "Tony Ramos";
SELECT * from Atores WHERE gênero = "invalid";
-- Retornou uma linha cheia de valores nulos. Como se não existisse nenhuma id com esse gênero
-- d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
SELECT id, nome, salário from Atores WHERE salário <= 500000;
SELECT id, nome, salário from Atores WHERE salário >= 500000;
SELECT id, nome from Atores WHERE id = "002";
-- EXERCÍCIO 04:
SELECT * FROM Atores
WHERE (nome LIKE "A%" OR nome LIKE "J%") AND salário > 300000;
-- b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
SELECT * FROM Atores
WHERE (nome NOT LIKE "A%") AND salário > 350000;
-- c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 
SELECT * FROM Atores WHERE nome LIKE "G%" OR nome LIKE "%g%";
-- d. Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00
SELECT * FROM Atores WHERE (nome LIKE "G%" OR nome LIKE "%g%" OR "A%" OR "%a%") AND salário BETWEEN 350000 AND 900000;

-- EXERCÍCIO 05:
CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    título VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    lançamento DATE NOT NULL,
    avaliação INT NOT NULL
);

INSERT INTO Filmes (id, título, sinopse, lançamento, avaliação)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006/01/06",
  "7"
);
INSERT INTO Filmes (id, título, sinopse, lançamento, avaliação)
VALUES(
  "002", 
  "Doce de Mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012/12/27",
  "10"
);
INSERT INTO Filmes (id, título, sinopse, lançamento, avaliação)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017/11/02",
  "8"
);
INSERT INTO Filmes (id, título, sinopse, lançamento, avaliação)
VALUES(
  "004", 
  "O Animal Cordial",
  "Inácio é o dono de um restaurante de classe média, por ele gerenciado com mão de ferro. Sua postura controladora gera atritos com os funcionários, em especial com o cozinheiro Djair. Quando o estabelecimento é assaltado por Magno e Nuno, Inácio e a garçonete Sara precisam encontrar meios para controlar a situação e lidar com os clientes que ainda estão no local: o solitário Amadeu e o casal endinheirado Bruno e Verônica.",
  "2018/08/09",
  "9"
);
-- e. Pesquise algum filme brasileiro e crie ele na tabela
SELECT * from Filmes WHERE título = "O Animal Cordial";
-- EXERCÍCIO 6:
SELECT id, título, avaliação from Filmes WHERE id = "003";
SELECT id, título, sinopse from Filmes WHERE avaliação >= "8";
-- EXERCÍCIO 7:
-- A)
SELECT * FROM Filmes WHERE Título LIKE "%vida%";
SELECT * FROM Filmes WHERE Título LIKE "%flor%";
-- B)
SELECT * FROM Filmes WHERE título LIKE "%se%" OR sinopse LIKE "%se%";
SELECT * FROM Filmes WHERE título LIKE "%don%" OR sinopse LIKE "%don%";
-- C)
SELECT * FROM Filmes WHERE lançamento < "2021-05-04";
-- D)
SELECT * FROM Filmes WHERE lançamento < CURDATE() AND 
      (título LIKE "%dona%" OR sinopse LIKE "%dona%") AND avaliação > 7;
      SELECT * FROM Filmes WHERE lançamento < CURDATE() AND 
      (título LIKE "%dona%" OR sinopse LIKE "%dona%") AND avaliação > 8;
SELECT * FROM Filmes;
SHOW TABLES;








