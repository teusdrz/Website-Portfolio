
import { Schema, model } from 'mongoose';
import { GuestbookEntryEntity } from '../../../domain/entities/guestbook';

const guestbookEntrySchema = new Schema<GuestbookEntryEntity>({
  name: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const GuestbookModel = model<GuestbookEntryEntity>('GuestbookEntry', guestbookEntrySchema);
