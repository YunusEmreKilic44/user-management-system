import express from "express";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;

app.use("/users", userRouter);

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
