import { connection } from "./data/connection"


// EXERCÍCIO 2: 

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

export const createTables = () => connection.raw(`

      CREATE TABLE IF NOT EXISTS aula51_Address (
         cep INT PRIMARY KEY,
         logradouro VARCHAR(255) NOT NULL,
         numero INT NOT NULL,
         complemento VARCHAR(255),
         bairro VARCHAR(255) NOT NULL,
         cidade VARCHAR(255) NOT NULL,
         estado VARCHAR(255) NOT NULL,
      );
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)