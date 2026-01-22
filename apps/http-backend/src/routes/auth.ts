import { Router, type Router as ExpressRouter } from "express";

const router: ExpressRouter = Router();

router.post("/signup", (req, res) => {
  const { email, password } = req.body;

  return res.status(201).json({
    email: email,
    password: password,
  });
});

export default router;
