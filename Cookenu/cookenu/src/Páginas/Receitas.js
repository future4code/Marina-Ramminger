import React from "react";
import useProtectedPage from "../hooks/useProtectedPage";

const Receitas = () => {
  useProtectedPage()
  return (
    <div>
         <h1> Receitas </h1>
    </div>
  )
}

export default Receitas 