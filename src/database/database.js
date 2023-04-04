import pgk from "pg";
const { Pool } = pgk;

const connectionString = process.env.DATABASE_URL;

export const dBase = new Pool({
    connectionString
});



