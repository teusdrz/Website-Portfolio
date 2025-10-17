
import axios from 'axios';
import { GuestbookEntryEntity } from '../../domain/entities';
import { GuestbookRepository } from '../../domain/repositories/GuestbookRepository';

const API_URL = 'http://localhost:3001/api';

export class ApiGuestbookRepository implements GuestbookRepository {
  async getAll(): Promise<GuestbookEntryEntity[]> {
    try {
      const response = await axios.get(`${API_URL}/guestbook`);
      return response.data.map((data: any) => GuestbookEntryEntity.fromData(data));
    } catch (error) {
      console.error('Error fetching guestbook entries:', error);
      return [];
    }
  }

  async add(entry: { name: string; message: string }): Promise<GuestbookEntryEntity> {
    const response = await axios.post(`${API_URL}/guestbook`, entry);
    return GuestbookEntryEntity.fromData(response.data);
  }
}
