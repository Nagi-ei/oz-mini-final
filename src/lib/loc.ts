import { Coordinate, Place } from '@/types/places';

function toRad(value: number): number {
  return (value * Math.PI) / 180;
}

function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lng2 - lng1);
  const l1 = toRad(lat1);
  const l2 = toRad(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(l1) * Math.cos(l2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}

// lat, lon 파라미터를 그냥 좌표 객체로 (타입)
export function sortPlacesByDistance(
  places: Place[],
  coord: Coordinate
): Place[] {
  const sortedPlaces = [...places];
  sortedPlaces.sort((a, b) => {
    const distanceA = calculateDistance(coord.lat, coord.lon, a.lat, a.lon);
    const distanceB = calculateDistance(coord.lat, coord.lon, b.lat, b.lon);
    return distanceA - distanceB;
  });
  return sortedPlaces;
}
