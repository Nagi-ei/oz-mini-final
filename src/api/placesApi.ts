import { BASE_URL } from '@/constants';
import { Place } from '@/types/places';
import axios from 'axios';

export const placesApi = {
  getPlaces: async (): Promise<Place[]> => {
    const response = await axios.get<{ places: Place[] }>(`${BASE_URL}/places`);
    return response.data.places;
  },
};
