import pgk from "pg";
const { Pool } = pgk;

export const dBase = new Pool({
    user: "django",
    password: "password1",
    host: "localhost",
    port: 5432,
    database: "pern2023"
});



// const connectionString = process.env.DATABASE_URL;