import express from "express";
import userRouter from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

const port = 5000;

app.use("/users", userRouter);

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
