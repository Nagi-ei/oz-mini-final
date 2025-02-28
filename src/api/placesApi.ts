import { Place } from '@/types/places';
import axios from 'axios';

export const placesApi = {
  getPlaces: async (): Promise<Place[]> => {
    const response = await axios.get<{ places: Place[] }>(
      'http://localhost:3000/places'
    );
    return response.data.places;
  },
};
