import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/Photos";
import Selectedphotos from "./user/Selected";
import Addevents from "./admin/Addevent"
import AdminDashBoard from "./admin/AdminDashBoard";
// import { signin } from "./auth/helper";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Signin} />

        <Route path="/home" exact component={Home} />

        <Route path="/addcustomer" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <PrivateRoute path="/user/selected" exact component={Selectedphotos} />

        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute path="/admin/addevents" exact component={Addevents} />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
