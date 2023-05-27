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
    return res.redirect("/user/login");
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
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};

export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};

export const getEdit = (req, res) =>
  res.render("user/edit", { pageTitle: "Edit Profile", errorMessage: "" });

export const postEdit = async (req, res) => {
  const {
    session: {
      user: { _id, name, avatarUrl },
    },
    body: { newName },
    file,
  } = req;
  const ok = bcrypt.compare(newName, name);
  if (!ok) {
    return res.status(400).render("user/edit", {
      pageTitle: "Edit Profile",
      errorMessage: "동일한 이름입니다. 다른이름으로 설정해주세요.",
    });
  }

  const updateUser = await User.findByIdAndUpdate(
    _id,
    {
      avatarUrl: file ? file.path : avatarUrl,
      name,
    },
    { new: true }
  );
  req.session.user = updateUser;

  return res.redirect("/user/edit");
};

export const getChangePassword = (req, res) => {
  return res.render("user/changePassword", {
    pageTitle: "Change Password",
    errorMessage: "",
  });
};

export const postChangePassword = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    body: { oldPassword, newPassword, newPassword2 },
  } = req;

  const user = await User.findById(_id);
  const ok = await bcrypt.compare(oldPassword, user.password);

  if (!ok) {
    return res.status(400).render("user/changePassword", {
      pageTitle: "Change Password",
      errorMessage: "The current password is incorrect.",
    });
  }

  if (newPassword !== newPassword2) {
    return res.status(400).render("user/changePassword", {
      pageTitle: "Change Password",
      errorMessage: "The password does not match the confirmation",
    });
  }

  user.password = newPassword;
  await user.save();
  return res.redirect("user/logout");
};
