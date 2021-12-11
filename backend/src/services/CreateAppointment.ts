import { getRepository } from 'typeorm';
import Appointment from '../models/Appointment';

interface IRequest {
  description: string,
  hour: Date,
  doctorId: string,
}

class CreateAppointment {
  async execute({
    description,
    hour,
    doctorId,
   }: IRequest): Promise<Appointment> {
    const appointmentRepository = getRepository(Appointment);

    const appointment = appointmentRepository.create({
      doctorId,
      description,
      hour,
      isAppointed: false,
    });

    await appointmentRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointment;
