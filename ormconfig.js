module.exports = {
    "type": "mysql",
    "url": "mysql://admin:serverpro20212021@mysqlserver.ceaketwwpzcm.sa-east-1.rds.amazonaws.com:3306/petdatabase",
    "migrations": [
        "./dist/database/migrations/*.ts"
    ],
    "entities": [
        "./dist/models/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
}