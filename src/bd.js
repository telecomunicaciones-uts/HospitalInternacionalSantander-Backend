import { createPool } from 'mysql2/promise'

const pool = createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'huts.123*',
    port: 3306,
    database: 'huts'
})

export { pool }