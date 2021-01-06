module.exports = {
    "type": "mysql",
    "host": "mysqlserver.ceaketwwpzcm.sa-east-1.rds.amazonaws.com",
    "port": 3306,
    "username": "admin",
    "password": "serverpro20212021",
    "database": "petdatabase",
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