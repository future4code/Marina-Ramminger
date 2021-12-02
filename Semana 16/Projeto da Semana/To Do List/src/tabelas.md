CREATE TABLE ListUser (
	id VARCHAR(255) PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE ListTasks (
	id VARCHAR(64) PRIMARY KEY, 
    title VARCHAR(64) NOT NULL, 
    descrição VARCHAR(1024) DEFAULT "Sem descrição",
    prazo DATE,
    status ENUM("fazer", "fazendo", "finalizado") DEFAULT "fazer",
    responsável VARCHAR(64),
    FOREIGN KEY (responsável) REFERENCES ListUser(id)
    );
    
CREATE TABLE ListAssigne (
tarefa_id VARCHAR(64),
responsável_id VARCHAR(64),
PRIMARY KEY (tarefa_id, responsável_id),
FOREIGN KEY (tarefa_id) REFERENCES ListTasks(id),
FOREIGN KEY (responsável_id) REFERENCES ListUser(id)
);