import express from "express";
import router from "./routes/routes.js";
import cors from "cors";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use("/produtos", router);

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta http://localhost:${PORT}/produtos`)
});