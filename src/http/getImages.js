import { config } from './config';

export const getImages = (q, page) => {
  const queryString = new URLSearchParams({
    ...config.getImagesQueries,
    q,
    page,
  });

  return fetch(`${config.apiUrl}?${queryString.toString()}`).then(res => {
    return res.json();
  });
};
