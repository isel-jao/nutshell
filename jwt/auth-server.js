const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
console.clear();

const port = 4000;
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

const refreshTokens = [];

app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username)
    return res.status(400).json({ message: `username is required` });
  if (!password)
    return res.status(400).json({ message: `password is required` });
  const user = users.find((user) => user.username === username);
  if (!user || user.password !== password)
    return res.status(400).json({ message: `username or password is wrong` });
  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  res.json({ accessToken, refreshToken });
});

app.post("/token", (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ username: user.username });
    res.json({ accessToken });
  });
});

app.delete("/logout", (req, res) => {
  const { refreshToken } = req.body;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.sendStatus(204);
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30s" });
}

app.listen(port, () => {
  console.log(`Auth Server is running on port ${port}`);
});
