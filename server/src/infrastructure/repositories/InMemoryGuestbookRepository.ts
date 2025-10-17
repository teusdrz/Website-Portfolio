import { GuestbookEntryEntity } from '../../domain/entities';
import { GuestbookRepository } from '../../domain/repositories';

export class InMemoryGuestbookRepository implements GuestbookRepository {
    private entries: GuestbookEntryEntity[] = [];

    async getAll(): Promise<GuestbookEntryEntity[]> {
        // Retornar ordenado por data (mais recente primeiro)
        return [...this.entries].sort((a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }

    async add(entry: { name: string; message: string }): Promise<GuestbookEntryEntity> {
        const newEntry: GuestbookEntryEntity = {
            id: (this.entries.length + 1).toString(),
            name: entry.name,
            message: entry.message,
            createdAt: new Date()
        };

        this.entries.push(newEntry);
        return newEntry;
    }

    async getById(id: string): Promise<GuestbookEntryEntity | null> {
        const entry = this.entries.find(e => e.id === id);
        return entry || null;
    }

    async delete(id: string): Promise<boolean> {
        const index = this.entries.findIndex(e => e.id === id);
        if (index !== -1) {
            this.entries.splice(index, 1);
            return true;
        }
        return false;
    }
}
