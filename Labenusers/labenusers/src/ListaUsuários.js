import React from 'react';
import axios from "axios";


const headers = {
    headers: {
      Authorization: "marina-ramminger-maryam"
    }
  }

  export default class App extends React.Component {
    state = {
        userlist: []
    }

    // deleteUSer = (id) => {
    //     const url2 = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    //     axios.delete(url, headers)
    //     .then((response) => {
    //         this.getAllUserlist()
    //     })
    //     .catch ((error) => {console.log(error)})

    // }
    
  getAllUserlist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ userlist: res.data})
        console.log (this.state.userlist)
      })
      .catch((err) => {
        alert(err.response);
      })
  }

  componentDidMount() {
    this.getAllUserlist();
  }

    render() {
        const listaUsers = this.state.userlist.map((user) => {
            console.log(user)
            return <li key={user.id}>{user.name}</li>
        }
        )

            // return <div>
            //     {listaUsers.name}
            //     <button onClick={() => this.deleteUSer}>Deletar</button>
            //     {this.deleteUSer}
            // </div>


        return(
            <div>   
    <h1> Lista de Usuários </h1>
    {listaUsers}
            </div>
        )
    }
}