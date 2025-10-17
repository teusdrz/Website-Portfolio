
import { GuestbookEntryEntity } from '../../domain/entities/guestbook';
import { MongoGuestbookRepository } from '../../infrastructure/repositories/MongoGuestbookRepository';

export class GetGuestbookEntriesUseCase {
  constructor(private readonly guestbookRepository: MongoGuestbookRepository) {}

  async execute(): Promise<GuestbookEntryEntity[]> {
    return this.guestbookRepository.getAll();
  }
}
