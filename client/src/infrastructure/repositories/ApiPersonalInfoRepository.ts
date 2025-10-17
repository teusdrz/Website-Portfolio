import axios from 'axios';
import { PersonalInfoEntity } from '../../domain/entities/PersonalInfo';

const API_URL = 'http://localhost:3001/api';

export class ApiPersonalInfoRepository {
  async get(): Promise<PersonalInfoEntity> {
    const response = await axios.get(`${API_URL}/personal-info`);
    return response.data;
  }
}