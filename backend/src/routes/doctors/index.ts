import { Router } from 'express';

import ListDoctors from '../../services/ListDoctor';
import CreateDoctor from '../../services/CreateDoctor';

const doctorsRoutes = Router();

doctorsRoutes.get('/', async(req, res) => {
  const listDoctors = new ListDoctors();

  const { name } = req.query;

  const appointments = await listDoctors.execute(name as string);

  return res.json(appointments);
});

doctorsRoutes.post('/', async(req, res) => {
  const createDoctor = new CreateDoctor();

  const {
    doctorName,
    phone,
    especialidade,
  } = req.body;

  const doctor = await createDoctor.execute({
    doctorName,
    phone,
    especialidade,
  });

  return res.json(doctor);
});

export default doctorsRoutes;

