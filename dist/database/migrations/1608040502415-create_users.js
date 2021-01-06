"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsers1608040502415 = void 0;
const typeorm_1 = require("typeorm");
class createUsers1608040502415 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'users',
                    type: 'varchar',
                },
                {
                    name: 'key',
                    type: 'varchar',
                },
                {
                    name: 'token',
                    type: 'varchar',
                }
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('users');
    }
}
exports.createUsers1608040502415 = createUsers1608040502415;
