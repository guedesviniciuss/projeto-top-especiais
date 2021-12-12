import { getRepository } from 'typeorm';
import Appointment from '../models/Appointment';

class ListAppointments {
  async execute(id?: string): Promise<Appointment[]> {
    const appointmentRepository = getRepository(Appointment);

    let appointments;
    if(id !== 'undefined') {
      appointments = await appointmentRepository.find({ where: { doctorId: id } });
    } else {
      appointments = await appointmentRepository.find();
    }

    return appointments;
  }
}

export default ListAppointments;
