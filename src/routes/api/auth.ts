import express from "express";

const router = express.Router();

//signup
router.post("/register");

// signin
router.post("/login");

//logout
router.get("/logout");

router.get("/current");



export default router;