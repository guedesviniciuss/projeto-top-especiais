import { getRepository, Like } from 'typeorm';
import Doctor from '../models/Doctor';

class ListDoctors {
  async execute(name: string): Promise<Doctor[] | undefined> {
    const doctorRepository = getRepository(Doctor);

    let doctors;
    if(name !== undefined) {
      doctors = await doctorRepository.find({ doctorName: Like(`%${name}%`) });
    } else {
      doctors = await doctorRepository.find();
    }
    return doctors;
  }
}

export default ListDoctors;
