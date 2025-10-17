
import { GuestbookEntryEntity } from '../../domain/entities/guestbook';
import { GuestbookModel } from '../database/models/GuestbookModel';

export class MongoGuestbookRepository {
  async getAll(): Promise<GuestbookEntryEntity[]> {
    return GuestbookModel.find().sort({ createdAt: -1 });
  }

  async add(entry: { name: string; message: string }): Promise<GuestbookEntryEntity> {
    const newEntry = new GuestbookModel(entry);
    return newEntry.save();
  }
}
