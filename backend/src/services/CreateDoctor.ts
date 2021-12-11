import { getRepository } from 'typeorm';
import Doctor from '../models/Doctor';

interface IRequest {
  doctorName: string,
  phone: string,
  especialidade: string;
}

class CreateDoctor {
  async execute({
    doctorName,
    phone,
    especialidade,
   }: IRequest): Promise<Doctor> {
    const doctorRepository = getRepository(Doctor);

    const doctor = doctorRepository.create({
      doctorName,
      phone,
      especialidade,
    });

    const saved = await doctorRepository.save(doctor);

    return saved;
  }
}

export default CreateDoctor;
