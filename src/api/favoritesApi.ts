import { BASE_URL } from '@/constants';
import { Place } from '@/types/places';
import axios from 'axios';

// 콘솔 확인해보기
export const favoritesApi = {
  getFavorites: async (): Promise<Place[]> => {
    const response = await axios.get<{ places: Place[] }>(
      `${BASE_URL}/users/places`
    );
    console.log(response);
    return response.data.places;
  },
  postFavorites: async (data: Place) => {
    const response = await axios.post<{ message: string }>(
      `${BASE_URL}/users/places`,
      data
    );
    console.log(response);
    return response.data.message;
  },
  deleteFavorites: async (id: string) => {
    const response = await axios.delete(`${BASE_URL}/users/places/${id}`);
    console.log(response);
    // return;
  },
};
