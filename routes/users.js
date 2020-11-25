const router = require("express").Router();
// Bring in the User Registration function
const {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
  serializeUser
} = require("../utils/Auth");

// Admin Registration Route
router.post("/register-admin", async (req, res) => {
  await userRegister(req.body, "admin", res);
});

// Tech Route
router.post("/register-tech-admin", async (req, res) => {
  await userRegister(req.body, "tech", res);
});

// finance Login Route
router.post("/login-finance", async (req, res) => {
  await userLogin(req.body, "finance", res);
});

// Admin Login Route
router.post("/login-admin", async (req, res) => {
  await userLogin(req.body, "admin", res);
});

// Sales Login Route
router.post("/login-sales", async (req, res) => {
  await userLogin(req.body, "sales", res);
});

// HR Login Route
router.post("/login-hr", async (req, res) => {
    await userLogin(req.body, "hr", res);
  });

// Tech Login Route
router.post("/login-tech", async (req, res) => {
    await userLogin(req.body, "tech", res);
  });

// Profile Route
router.get("/profile", userAuth, async (req, res) => {
  return res.json(serializeUser(req.user));
});

// Finance Protected Route
router.get(
  "/finance-protectd",
  userAuth,
  checkRole(["finance"]),
  async (req, res) => {
    return res.json("Hello User");
  }
);

// AD Protected Route
router.get(
  "/admin-protected",
  userAuth,
  checkRole(["admin"]),
  async (req, res) => {
    return res.json("Hello Admin");
  }
);

// Sales Protected Route
router.get(
  "/sales-protectd",
  userAuth,
  checkRole(["sales"]),
  async (req, res) => {
    return res.json("Hello sales");
  }
);

// HR Protected Route
router.get(
  "/hr-protected",
  userAuth,
  checkRole(["hr"]),
  async (req, res) => {
    return res.json("hr");
  }
);

// Technology Protected Route
router.get(
    "/tech-protectd",
    userAuth,
    checkRole(["tech"]),
    async (req, res) => {
      return res.json("tech");
    }
  );

module.exports = router;
