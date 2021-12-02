import express, { Request, Response } from 'express'
import cors from 'cors'



const app = express() 
app.use(express.json()) 
app.use(cors())


app.listen(3003, () =>{
  console.log("Servidor pronto!")
})

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: UserType.ADMIN,
      age: 60
  }
]

// //EXERCÍCIO 1:

// app.get("/users", (req, res) => {
//   res.send(users)
// })

//A) Método GET, pois é ele que busca recursos.
//B)  No express, a representação de uma entidade se dá pelo path que passamos em cada endpoint. 
// No endpoint acima, a entidade é users e o método é get.

//EXERCÍCIO 2:
// app.get("/users/:type", (req: Request, res: Response) => {
//   let codeError:number = 400
//   try{
//     const type: string = req.params.type as string
//     if(type === UserType.NORMAL || type === UserType.ADMIN) {
//       const userType:User[] | undefined = users.filter((user)=>{
//         return user.type === type 
//       })
//       res.status(200).send(userType)
//     } else {
//       res.status(400).send()
//     }
//   }
// })

// Por que está com esse erro no colchetes?

// app.get("/users/:type", (req: Request, res: Response) => {
//   let codeError:number = 400
//   try{
//     const type: string = req.params.type.toUpperCase() as string
//     if(type === UserType.NORMAL || type === UserType.ADMIN){
//       const userType: User[] | undefined = users.filter((user) => {
// return user.type === type
//       })
//       res.status(200).send(userType)
//     } else {
//       res.status(400).send()
//     }
// })

// EXERCÍCIO 3:
// Faça agora um endpoint de busca que encontre um usuário buscando por nome.
// a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
//Query, pois ele é mais recomendado para fazermos uma busca dentro de um mesmo conjunto.
// b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.

// QUERY:

app.get('/users', (req: Request, res: Response) => {
  let codeError: number = 400
  try {
    const name: string = req.query.name as string
    const user: User | undefined = users.find((user) => user.name.toUpperCase() === name.toUpperCase()) 
    if(!user) {
      codeError = 404
      throw new Error('Usuário não encontrado')
    }
    res.status(200).send(user)
  } catch (error:any) {
    res.status(codeError).send({message: error.message})
  }
})

// app.post('/users', (req: Request, res: Response) => {
//   let errorCode:number = 400
//   try {
//     const {id, name, email, type, age} = req.body

// if(!id || !name || !email || !type || !age) {
//   errorCode = 422
//   throw new Error ('Algo está errado ou incompleto')
// }
//     const newUser: User = {
//       id: id,
//       name: name,
//       email: email,
//       type: type,
//       age: age
//     }
    
//     users.push(newUser)
//     res.status(201).send({message: "Usuário criado com sucesso!"})

//   } catch(error:any) {
//     res.status(errorCode).send({message: error.message})
//   }
// })

// Por que colocar o "any"? Por que não estou conseguindo criar um novo usuário?

///O nome da propriedade precisa ser igual ao da variável que está armazenando o valor

app.post('/users', (req: Request, res: Response) => {
  let errorCode:number = 400
  try{
    const id = req.body.id
    const name = req.body.name
    const email = req.body.email
    const type = req.body.UserType
    const age = req.body.age

    if(!id || !name || !email || !type || !age) {
      errorCode = 422
      throw new Error('Algo não está certo')
    }

    const newUser: User = {
      id,
      name,
      email,
      type,
      age
    }

    users.push(newUser)
    res.status(201).send({message: "Usuário criado com sucesso"})
  } catch(error:any) {
    res.status(errorCode).send({message: error.message})
  }
})

//Qual o problema com a requisição?


