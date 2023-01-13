import express from "express";

const app = express();
const PORT = 5050;
const users = [
  { name: "Sherlock", password: "123456" },
  { name: "John", password: "123456" },
];

app.use(express.json());

app
  .route("/api/users")
  .get(async (req, res) =>
    res
      .header("Access-Control-Allow-Origin", "http://localhost:8000")
      .json(users)
  );

app.use((err, req, res, next) => {
  res.status(500).json({ message: "Server error" });
  next();
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
