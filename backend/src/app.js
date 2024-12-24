import express from "express";
import indexRouter from "./routes/index.route.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use("/", indexRouter);

export default app;
