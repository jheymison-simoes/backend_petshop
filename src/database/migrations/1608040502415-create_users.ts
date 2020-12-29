import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1608040502415 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
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
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
