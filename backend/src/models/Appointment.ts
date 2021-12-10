import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn
} from 'typeorm';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'doctor_name' })
  doctorName: string;

  @Column()
  description: string;

  @Column("timestamp with time zone")
  hour: Date;

  @Column({ name: 'is_appointed', default: false })
  isAppointed: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}


export default Appointment;
