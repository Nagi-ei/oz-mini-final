import { UseMutationResult } from '@tanstack/react-query';

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

export type PostAction = UseMutationResult<string, Error, Place, unknown>;
export type DeleteAction = UseMutationResult<void, Error, string, unknown>;
export type Action = PostAction | DeleteAction;

export type ActionType = '추가' | '삭제';
