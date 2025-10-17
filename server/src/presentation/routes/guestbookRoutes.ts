
import { Router } from 'express';
import { GuestbookController } from '../controllers/GuestbookController';
import { GetGuestbookEntriesUseCase } from '../../application/usecases/GetGuestbookEntriesUseCase';
import { AddGuestbookEntryUseCase } from '../../application/usecases/AddGuestbookEntryUseCase';
import { InMemoryGuestbookRepository } from '../../infrastructure/repositories/InMemoryGuestbookRepository';

const router = Router();

// Dependency injection - usando repositório em memória
const guestbookRepository = new InMemoryGuestbookRepository();
const getGuestbookEntriesUseCase = new GetGuestbookEntriesUseCase(guestbookRepository);
const addGuestbookEntryUseCase = new AddGuestbookEntryUseCase(guestbookRepository);
const guestbookController = new GuestbookController(
  getGuestbookEntriesUseCase,
  addGuestbookEntryUseCase
);

router.get('/guestbook', (req, res) => guestbookController.getEntries(req, res));
router.post('/guestbook', (req, res) => guestbookController.addEntry(req, res));

export { router as guestbookRoutes };
