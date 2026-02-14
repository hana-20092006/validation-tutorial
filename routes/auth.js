// The Authentication Department
import express from "express";
import { registerValidation, loginValidation, validate } from "../middleware/validators.js";

const router = express.Router();

// register
router.post("/register", registerValidation, validate, (req, res)=> {
    
    if (req.body.email === "test@example.com") {
        return res.status(400).json({
            message: "Email already exists"
        });
    }
    res.json({
        message: "User registered successfully"
    });
});

// login 
router.post("/login", loginValidation, validate,
    (req,res) => {
        res.json({
            message: "Login successful"
        });
    }
);

export default router;