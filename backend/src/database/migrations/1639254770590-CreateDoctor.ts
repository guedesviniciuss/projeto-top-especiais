import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateDoctor1639254770590 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'doctors',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'doctor_name',
            type: 'varchar',
          },
          {
            name: 'especialidade',
            type: 'varchar',
          },
          {
            name: 'phone',
            type: 'varchar',
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

      await queryRunner.createForeignKey('appointments', new TableForeignKey({
        name: 'AppointmentsUser',
        columnNames: ['doctor_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'doctors',
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
