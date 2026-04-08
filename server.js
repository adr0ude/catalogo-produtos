import express from "express";
import router from "./routes/routes.js";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use("/produtos", router);

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta http://localhost:${PORT}/produtos`)
});