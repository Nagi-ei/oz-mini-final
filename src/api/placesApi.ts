import { BASE_URL } from '@/constants';
import { Place } from '@/types/places';
import axios from 'axios';

export const placesApi = {
  getPlaces: async (): Promise<Place[]> => {
    const response = await axios.get<{ places: Place[] }>(`${BASE_URL}/places`);
    // console.log(response);
    return response.data.places;
  },
};

// 여기선 커스텀 훅 사용 불가
