import { api } from '../instance';

export const getCharacters = ({ options }: any) => api.get('character', { ...(options && options) });
