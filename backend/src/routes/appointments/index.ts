import { Router } from 'express';

const appointmentsRoutes = Router();

import CreateAppointment from '../../services/CreateAppointment';
import FindAppointment from '../../services/FindAppointment';
import ListAppointments from '../../services/ListAppointments';
import RegisterAppointment from '../../services/RegisterAppointment';
import MyAppointments from '../../services/MyAppointments';
import CancelarConsulta from '../../services/CancelarConsulta';

///////// [ x ] listar agendamento
appointmentsRoutes.get('/', async(req, res) => {

  const { id } = req.query;
  console.log(id);

  const listAppointments = new ListAppointments();
  const appointments = await listAppointments.execute(id as string);

  return res.json(appointments);
});

appointmentsRoutes.get('/mine', async(req, res) => {
  const myAppointments = new MyAppointments();
  const appointments = await myAppointments.execute();

  return res.json(appointments);
});

///////// [ x ] find agendamento
appointmentsRoutes.get('/:id', async(req, res) => {
  const { id } = req.params;

  const findAppointment = new FindAppointment();
  const appointment = await findAppointment.execute(id);

  return res.json({ appointment });
});

///////// [ x ] atualizar agendamento
appointmentsRoutes.patch('/:id/agendar', async(req, res) => {
  const { id } = req.params;

  const registerAppointment = new RegisterAppointment();
  await registerAppointment.execute(id);

  return res.status(200).send();
});

appointmentsRoutes.patch('/:id/cancelar', async(req, res) => {
  const { id } = req.params;

  const registerAppointment = new CancelarConsulta();
  await registerAppointment.execute(id);

  return res.status(200).send();
});

///////// [ x ] create agendamento
appointmentsRoutes.post('/', async(req, res) => {

  const {
    description,
    hour,
    doctorId,
  } = req.body;

  const createAppointment = new CreateAppointment();
  const appointment = await createAppointment.execute({
    description,
    hour,
    doctorId,
  });

  return res.json({ appointment });
});

export default appointmentsRoutes;

