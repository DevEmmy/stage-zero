import express from "express";
import { myData } from "./myData";
import cors from "cors";
import { fetchCatFact } from "./fetchCatFact";
import dotenv from "dotenv";
import expressRateLimit from "express-rate-limit";
import morgan from "morgan";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const limiter = expressRateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests, please try again later.",
    statusCode: 429,
});

app.use(cors());
app.use(express.json());
app.use(limiter);
app.use(morgan("combined"));

app.get("/me", async (req, res) => {
    try{
        const catFact = await fetchCatFact();
        
        return res.json({
            status: "success",
            user: myData,
            fact: catFact,   
            timestamp: new Date().toISOString(), 
        });
    } catch (error) {
        return res.status(500).json({ status: "error", error: "Failed to fetch data" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});