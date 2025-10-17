import { GuestbookEntryEntity } from '../entities/guestbook';

export interface GuestbookRepository {
    getAll(): Promise<GuestbookEntryEntity[]>;
    add(entry: { name: string; message: string }): Promise<GuestbookEntryEntity>;
    getById(id: string): Promise<GuestbookEntryEntity | null>;
    delete(id: string): Promise<boolean>;
}
