import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateAppointments1639101760873 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(new Table({
      name: 'appointments',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'doctor_id',
          type: 'uuid',
          isNullable: true,
        },
        {
          name: 'description',
          type: 'varchar',
        },
        {
          name: 'hour',
          type: 'timestamp',
          isNullable: false,
        },
        {
          name: 'is_appointed',
          type: 'boolean',
          isNullable: false,
          default: false,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }

}
