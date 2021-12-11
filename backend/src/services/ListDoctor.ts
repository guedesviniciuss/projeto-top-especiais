import { getRepository } from 'typeorm';
import Doctor from '../models/Doctor';

class ListDoctors {
  async execute(): Promise<Doctor[]> {
    const doctorRepository = getRepository(Doctor);
    const doctors = await doctorRepository.find();
    return doctors;
  }
}

export default ListDoctors;
