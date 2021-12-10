import { getRepository } from "typeorm";

import Appointment from "../models/Appointment";

class FindAppointment {
  async execute(id: string): Promise<Appointment | undefined> {
    const appointmentRepository = getRepository(Appointment);
    const appointment = await appointmentRepository.findOne(id);
    return appointment;
  }
}

export default FindAppointment;
