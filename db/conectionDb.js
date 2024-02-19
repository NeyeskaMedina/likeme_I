import 'dotenv/config'
import pg from "pg";


export const pool = new pg.Pool({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    allowExitOnIdle: true
}) 

export default pool;

