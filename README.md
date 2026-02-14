# Express Validator Authentication Practice

A simple backend project built to understand and implement input validation using `express-validator` in an Express.js application.

This project focuses on learning:
- Validation middleware
- Register route validation
- Login route validation
- Clean error handling
- Modular route structure
- Testing using Postman

---

## 🚀 Features Implemented

✅ `express-validator` installed and configured  
✅ Separate validation middleware  
✅ Register route validation  
✅ Login route validation  
✅ Custom error messages  
✅ Simulated duplicate email check  
✅ Proper route modularization  
✅ Postman testing  

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **express-validator**
- **Postman** (for API testing)

---

## 📂 Project Structure

```
project/
│
├── middleware/
│   └── validators.js
│
├── routes/
│   └── auth.js
│
└── server.js
```

---

## 🔐 Register Endpoint

**POST** `/api/auth/register`

### Validations:
- **Name** is required
- **Email** is required and must be valid
- **Password** must:
  - Be at least 6 characters
  - Contain an uppercase letter
  - Contain a number
- **Age** must be an integer

---

## 🔑 Login Endpoint

**POST** `/api/auth/login`

### Validations:
- **Email** is required and must be valid
- **Password** is required

> **Note:** Authentication logic is currently simulated for learning purposes.

---

## 🧪 Testing

All routes were tested using **Postman**:

- ❌ Invalid email
- ❌ Short password
- ❌ Missing fields
- ❌ Duplicate email
- ✅ Successful registration
- ✅ Successful login

---

## 📚 Learning Goal

This project was created purely to understand:

- How validation middleware works
- How `express-validator` integrates with Express
- How middleware chaining functions
- Difference between validation and authentication

> **No database integration yet** — this project focuses only on validation concepts.

---

## 🚦 Getting Started

### Prerequisites
- Node.js installed on your machine

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node server.js
```

4. Test the API using Postman at:
```
http://localhost:3000/api/auth/register
http://localhost:3000/api/auth/login
```

---

## 📝 License

This is a learning project and is free to use for educational purposes.

---

## 🤝 Contributing

Feel free to fork this project and experiment with additional validation rules or features!

---

**Happy Learning! 🎓**