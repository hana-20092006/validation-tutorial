// Validation middleware acts like a security guard before your route logic runs.

// to note that validation is not authentication
import { body, validationResult } from "express-validator";

// to note -> reigsterValidation and LoginValidation are arrays
// because Express allows multiple middlewares in an array.

// REGISTER VALIDATION RULES

export const registerValidation = [
    body("name")
    .notEmpty().withMessage("Name is required"),

    body("email").trim().toLowerCase().notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format").normalizeEmail(),
    
    body("password").notEmpty().withMessage("Password is required")
    .isLength({ min: 6}).withMessage("Password must be atleast 6 characters long")
    .matches(/[A-Z]/).withMessage("Password must contain a uppercase letter")
    .matches(/[0-9]/).withMessage("Password must contain a number"),
    
    body("age").notEmpty().withMessage("Age is required")
    .isInt().withMessage("Age must be a number"),
];

// LOGIN VALIDATION RULES

export const loginValidation = [
    body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email format"),
    body("password").notEmpty().withMessage("Password is required")
];

// VALIDATION RESULT MIDDLEWARE 
export const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    next();
};
