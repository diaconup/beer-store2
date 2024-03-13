import { IBeer } from './types/beers';

const baseUrl = 'http://localhost:3001';

export const getAllBeers = async (): Promise<IBeer[]> => {
  const res = await fetch(`${baseUrl}/beers`, { cache: 'no-store' });
  const todos = await res.json();
  return todos;
};

export const addToDo = async (todo: IBeer): Promise<IBeer> => {
  const res = await fetch(`${baseUrl}/beers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const newToDo = await res.json();
  return newToDo;
};
