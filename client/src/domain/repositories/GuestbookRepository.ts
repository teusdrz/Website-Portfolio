import { GuestbookEntryEntity } from '../entities';

export interface GuestbookRepository {
    getAll(): Promise<GuestbookEntryEntity[]>;
    add(entry: { name: string; message: string }): Promise<GuestbookEntryEntity>;
}
