import axios from 'axios';

const url = 'http://localhost:5000/users';

export const fetchPosts = () => axios.get(url);
export const createPosts = (data) => axios.post(url, data);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

