module.exports = {
    type: "mysql",
    url: process.env.DATA_BASE_URL,
    migrations: [process.env.TYPEORM_MIGRATIONS],
    entities: [process.env.TYPEORM_ENTITIES],
    cli: {
        migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR
    }
}