import { Coordinate } from '@/types/places';

export const locationApi = {
  getCurrentLocation: async (): Promise<Coordinate> => {
    const options = {
      // enableHighAccuracy: true, // 너무 느림
      timeout: 1000 * 5, // 5 s
      maximumAge: 1000 * 60 * 1, // 1 m
    };

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => reject(error),
        options
      );
    });
  },
};
