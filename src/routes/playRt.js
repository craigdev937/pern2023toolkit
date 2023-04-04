import express from "express";
import { PLAY } from "../controllers/playCon.js";

export const playRt = express.Router();
    playRt.post("/", PLAY.Create);
    playRt.get("/", PLAY.FetchAll);



    