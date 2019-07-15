import axios from "axios";
const BASE_URL = "https://nc-news-hm.herokuapp.com/api/";

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};
