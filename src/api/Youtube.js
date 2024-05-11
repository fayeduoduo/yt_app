import axios from "axios";

//API key AIzaSyBl_f_ - aMbsTn8Dn4vTx8KbmvuYm6Q8qvE;
const KEY = "AIzaSyBl_f_-aMbsTn8Dn4vTx8KbmvuYm6Q8qvE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 4,
    key: KEY,
  },
});
