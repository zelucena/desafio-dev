import 'reflect-metadata';
import typeorm from './typeORM';

export default async () => {
  await typeorm();
};
