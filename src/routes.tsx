import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import GlobalRecipe from "@/Page/GlobalRecipe";
import { Menu } from "@/Page/Menu";
import NotFound from "@/Page/NotFound";
import { Recipe } from "@/Page/Recipe";
import React from "react";
import Profile from "@/Page/Profile";

const routes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Menu} />
        <Route path="/Menu" Component={Menu} />
        <Route path="/Recipe" Component={Recipe} />
        <Route path="/GlobalRecipe" Component={GlobalRecipe} />
        <Route path="/Profile" Component={Profile} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
};

export default routes;
