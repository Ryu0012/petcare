import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
  return res.render("user/join", {
    pageTitle: "Join",
    errorMessage: "",
    passwordErrorMessage: "",
    emailErrorMessage: "",
  });
};
export const postJoin = async (req, res) => {
  const { name, email, password, password2 } = req.body;
  const emailExists = await User.exists({ email });
  if (password !== password2) {
    return res.status(400).render("user/join", {
      pageTitle: "Join",
      errorMessage: "",
      emailErrorMessage: "",
      passwordErrorMessage: "비밀번호가 동일하지 않습니다.",
    });
  }
  if (emailExists) {
    return res.status(400).render("user/join", {
      pageTitle: "Join",
      errorMessage: "",
      emailErrorMessage: "이미 존재하는 이메일 입니다.",
      passwordErrorMessage: "",
    });
  }
  try {
    await User.create({
      name,
      email,
      password,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("user/join", {
      pageTitle: "Join",
      errorMessage: error._message,
      emailErrorMessage: "",
      passwordErrorMessage: "",
    });
  }
};

export const getLogin = (req, res) =>
  res.render("user/login", { pageTitle: "Login", errorMessage: "" });

export const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).render("user/login", {
      pageTitle: "Login",
      errorMessage: "입력한 이메일을 가진 회원이 존재하지 않습니다.",
      // An account with this username does not exists.
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("user/login", {
      pageTitle: "Login",
      errorMessage: "잘못된 비밀번호 입니다.",
    });
  }
  console.log("LOG USER IN! COMING SOON!");
  return res.redirect("/");
};

export const edit = (req, res) => res.render("");
