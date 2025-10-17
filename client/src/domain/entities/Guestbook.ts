export interface GuestbookEntryData {
    id: string;
    name: string;
    message: string;
    createdAt: Date;
}

export class GuestbookEntryEntity {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly message: string,
        public readonly createdAt: Date
    ) { }

    static create(name: string, message: string): GuestbookEntryEntity {
        return new GuestbookEntryEntity(
            '',
            name,
            message,
            new Date()
        );
    }

    static fromData(data: any): GuestbookEntryEntity {
        return new GuestbookEntryEntity(
            data.id,
            data.name,
            data.message,
            data.createdAt instanceof Date ? data.createdAt : new Date(data.createdAt)
        );
    }

    toData(): GuestbookEntryData {
        return {
            id: this.id,
            name: this.name,
            message: this.message,
            createdAt: this.createdAt
        };
    }

    getFormattedDate(): string {
        return this.createdAt.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}
