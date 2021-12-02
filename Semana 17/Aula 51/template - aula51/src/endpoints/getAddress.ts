import { Request, Response } from "express";
import { connection } from "../data/connection";
import axios from "axios"
import {createTables} from "../migrations"
import { stringify } from "querystring";


//EXERCÍCIO 1:

type Address = {
   logradouro: string
   bairro: string
   cidade: string
   estado: string,
};


export const getAddress = async (cep: string): Promise<Address> => {
   const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

   return {
   logradouro: response.data.logradouro,
   bairro: response.data.bairro,
   cidade: response.data.localidade,
   estado: response.data.uf,
   
}
}


// EXERCÍCIO 3:

type AddressInfo = {
   logradouro: string
   bairro: string
   cidade: string
   estado: string,
   cep: string,
   complemento: string,
   numero: number
};


export const insertAdress = async (cep: string, numero: number, complemento: string): Promise<AddressInfo> => {
   const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

   return {
   logradouro: response.data.logradouro,
   bairro: response.data.bairro,
   cidade: response.data.localidade,
   estado: response.data.uf,
   cep:  response.data.cep,
   complemento: complemento,
   numero: numero
}
}
