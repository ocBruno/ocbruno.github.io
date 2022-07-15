import axios from "axios";
// add option to change
const preferredLanguageCode = navigator.languages[0].split("-")[0];
const url = `https://newsapi.org/v2/top-headlines?country=${preferredLanguageCode}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
const getNewsFeed = async () => {
  return axios.get(url);
};
export { getNewsFeed };
