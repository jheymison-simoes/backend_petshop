import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProducts1606440754244 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
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
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }
}
