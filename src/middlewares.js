import multer from "multer";

//sessions
export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Pet care";
  res.locals.loggedInUser = req.session.user || {};
  // console.log(req.session);
  next();
};

export const protectorMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/user/login");
  }
};

export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/");
  }
};

export const userUploadImg = multer({
  dest: "uploads/users/",
  // limits: {
  //   fileSize: 3000000,
  // },
});

export const petUploadImg = multer({
  dest: "uploads/pets/",
  // limits: {
  //   fileSize: 3000000,
  // },
});
