import { getRepository } from 'typeorm';
import Appointment from '../models/Appointment';

class MyAppointments {
  async execute(): Promise<Appointment[]> {
    const appointmentRepository = getRepository(Appointment);
    const appointments = await appointmentRepository.find({ where: { isAppointed: true } });
    return appointments;
  }
}

export default MyAppointments;
