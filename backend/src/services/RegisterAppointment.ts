import { getRepository } from 'typeorm';
import Appointment from '../models/Appointment';

class RegisterAppointment {
  async execute(id: string): Promise<Appointment> {
    const appointmentRepository = getRepository(Appointment);

    const appointment = await appointmentRepository.findOne(id);

    if (!appointment) {
      throw new Error('Appointment nao existe');
    }

    appointment.isAppointed = true;

    await appointmentRepository.save(appointment);
    return appointment;
  }
}

export default RegisterAppointment;
