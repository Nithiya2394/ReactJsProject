import * as React from 'react';

type VoidCallback = () => void;

type TypeCallback<T> = (value: T) => void;

type ChangeEventCallback = (e: React.ChangeEvent<HTMLInputElement>) => void;

type MouseEventCallback = (e: React.MouseEvent<HTMLButtonElement>) => void;

export type {
  VoidCallback,
  TypeCallback,
  ChangeEventCallback,
  MouseEventCallback,
};
