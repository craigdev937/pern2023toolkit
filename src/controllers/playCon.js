import { dBase } from "../database/database.js";

class PlayClass {
    Create = async (req, res, next) => {
        try {
            const { title, first, last, age, info } = req.body;
            const createQuery = `INSERT INTO players 
            (title, first, last, age, info)
            VALUES($1, $2, $3, $4, $5) RETURNING *`;
            const values = [title, first, last, age, info];
            const newPlayer = await dBase.query(createQuery, values);
            res.status(200).json(newPlayer.rows[0]);
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    FetchAll = async (req, res, next) => {
        try {
            const fetchAllQry = "SELECT * FROM players";
            const allPlayers = await dBase.query(fetchAllQry);
            res.json(allPlayers.rows);
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };
};

export const PLAY = new PlayClass();




