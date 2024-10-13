import express from "express";
import cors from "cors";
import "dotenv/config.js";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import jobRouter from "./routes/jobRoute.js";
import newsRouter from "./routes/newsRoute.js";

// App config
const app = express();
const port = 5000 || process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());

// DB Connexion
connectDB();

// Api endpoints
app.use("/api/user", userRouter);
app.use("/api/job", jobRouter);
app.use("/api/news", newsRouter);
app.use("/images", express.static("uploads"));

//
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
