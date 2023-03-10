import axios from 'axios';

const myKey = '25755107-c5ecbaee54c3d5c87c2809c98';

export const getImages = (searchUser) => {
  return axios.get(
    `https://pixabay.com/api/?key=${myKey}&q=${searchUser}&image_type=photo&pretty=true`
  );
};
