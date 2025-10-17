
import { Request, Response } from 'express';
import { GetGuestbookEntriesUseCase } from '../../application/usecases/GetGuestbookEntriesUseCase';
import { AddGuestbookEntryUseCase } from '../../application/usecases/AddGuestbookEntryUseCase';

export class GuestbookController {
  constructor(
    private readonly getGuestbookEntriesUseCase: GetGuestbookEntriesUseCase,
    private readonly addGuestbookEntryUseCase: AddGuestbookEntryUseCase
  ) {}

  async getEntries(req: Request, res: Response): Promise<void> {
    try {
      const entries = await this.getGuestbookEntriesUseCase.execute();
      res.json(entries);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async addEntry(req: Request, res: Response): Promise<void> {
    try {
      const { name, message } = req.body;
      const newEntry = await this.addGuestbookEntryUseCase.execute({ name, message });
      res.status(201).json(newEntry);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
