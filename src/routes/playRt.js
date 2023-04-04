import express from "express";
import { HomeIndex } from "../controllers/playCon.js";

export const playRt = express.Router();
    playRt.get("/", HomeIndex);



    