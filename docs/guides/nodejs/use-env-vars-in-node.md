---
sidebar_position: 2
---
# Using `.env` Files in Node.js

In a Node.js application, environment variables can be managed using a `.env` file. Typically, the dotenv package is used to load these variables at runtime.

## Steps to Use .env in Node.js:

### Install the dotenv package:

```bash
npm install dotenv
```

#### create a .env file in the root of your project.

Example .env file:

```env title="example.env"
PORT=3000
DATABASE_URL=mongodb://localhost:27017/myapp
SECRET_KEY=mysecretkey
```

#### Load the .env file in your application:

In your entry file (e.g., app.js or index.js), load the environment variables using dotenv:

```js title="app.js"
require('dotenv').config();

const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;
const secretKey = process.env.SECRET_KEY;

console.log(`Server is running on port: ${port}`);
```

#### Access the environment variables:

```js title="app.js"
console.log(process.env.PORT);  // Output: 3000
```
    
