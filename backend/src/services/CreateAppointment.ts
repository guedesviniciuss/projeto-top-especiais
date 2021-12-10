import { getRepository } from 'typeorm';
import Appointment from '../models/Appointment';

interface IRequest {
  description: string,
  hour: Date,
  doctorName: string,
}

class CreateAppointment {
  async execute({
    description,
    hour,
    doctorName,
   }: IRequest): Promise<Appointment> {
    const appointmentRepository = getRepository(Appointment);

    const appointment = appointmentRepository.create({
      description,
      hour,
      doctorName,
    });

    await appointmentRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointment;
