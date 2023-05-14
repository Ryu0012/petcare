import { user } from "mongoose";

export const home = (req, res) => {
  return res.render("root/index", { pageTitle: "Pet Care" });
};

export const login = (req, res) => res.render("login/login");

export const edit = (req, res) => res.render("root/edit");
