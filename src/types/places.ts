export type Place = {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  lat: number;
  lon: number;
  description: string;
};

export type Coordinate = {
  lat: number;
  lon: number;
};
