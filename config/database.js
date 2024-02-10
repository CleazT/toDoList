import { Sequelize } from "sequelize";

const db = new Sequelize('crud_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

async function testConnection() {
    try {
        await db.authenticate();
        console.log('Connected to Database :)')
    } catch (error) {
        console.error(`Unable to connect to Database`)
    }
}
testConnection();

export default db;