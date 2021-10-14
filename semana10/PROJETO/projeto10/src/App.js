import React from "react";
import { AdmHome } from "./Pages/AdmHome";
import { CreateTrip } from "./Pages/CreateTrip";
import { FormPage } from "./Pages/FormPage";
import { Home } from "./Pages/Home";
import { ListaTrips } from "./Pages/ListaTrips";
import { Login } from "./Pages/Login";
import { TripDetails } from "./Pages/TripDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom"

export default function App () {
  return (
    <BrowserRouter>
    <Switch>

<Route exact path ={"/"}>
<Home />
</Route>

<Route exact path ={"/listrips"}>
<ListaTrips /> 
</Route>

<Route exact path ={"/form"}>
<FormPage />
</Route>

<Route exact path ={"/login"}>
<Login />
</Route>

<Route exact path ={"/adm"}>
<AdmHome />
</Route>

<Route exact path ={"/tripdetails"}>
<TripDetails />
</Route>

<Route exact path ={"/newtrip"}>
<CreateTrip />
</Route>

</Switch>
</BrowserRouter>

  );
}

