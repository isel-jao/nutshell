const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

console.clear();

const users = [
  {
    username: "John",
    password: "123",
  },
  {
    username: "Jane",
    password: "456",
  },
];

const posts = [
  {
    username: "John",
    title: "Post 1",
  },
  {
    username: "Jane",
    title: "Post 2",
  },
  {
    username: "John",
    title: "Post 3",
  },
];

app.use(express.json());

app.get("/posts", authenticate, (req, res) => {
  const user = req.user;

  res.json(posts.filter((post) => post.username === user.username));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

function authenticate(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkphbmUiLCJwYXNzd29yZCI6IjQ1NiIsImlhdCI6MTY3MTU2Njk2NSwiZXhwIjoxNjcxNTY2OTgwfQ.-Wf4-6cnd0LrjWJ5LT9r_bDVoGMKXTBk9Cfgjbxd-Rk

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkphbmUiLCJwYXNzd29yZCI6IjQ1NiIsImlhdCI6MTY3MTU2Njk2NX0.m0By6joDuyq48DymTKWAOPbAFL1BMb4ZA8j4MNZdros
