
import { GuestbookEntryEntity } from '../../domain/entities/guestbook';
import { MongoGuestbookRepository } from '../../infrastructure/repositories/MongoGuestbookRepository';

export class AddGuestbookEntryUseCase {
  constructor(private readonly guestbookRepository: MongoGuestbookRepository) {}

  async execute(entry: { name: string; message: string }): Promise<GuestbookEntryEntity> {
    return this.guestbookRepository.add(entry);
  }
}
