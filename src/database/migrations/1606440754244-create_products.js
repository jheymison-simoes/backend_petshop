"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProducts1606440754244 = void 0;
const typeorm_1 = require("typeorm");
class createProducts1606440754244 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'amount',
                    type: 'integer',
                },
                {
                    name: 'value',
                    type: 'decimal',
                    scale: 2,
                    precision: 19,
                },
                {
                    name: 'image',
                    type: 'varchar',
                },
                {
                    name: 'group',
                    type: 'varchar',
                },
                {
                    name: 'category',
                    type: 'varchar',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('products');
    }
}
exports.createProducts1606440754244 = createProducts1606440754244;
