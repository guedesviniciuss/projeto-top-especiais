import { getRepository } from 'typeorm';
import Appointment from '../models/Appointment';

class ListAppointments {
  async execute(): Promise<Appointment[]> {
    const appointmentRepository = getRepository(Appointment);
    const appointments = await appointmentRepository.find({ where: { isAppointed: false } });
    return appointments;
  }
}

export default ListAppointments;
