import axios from "axios";

export const getCat = async url => {
  try {
    const response = await axios.get(url, {
      headers: {
        "x-api-key": "f278f898-4af1-4790-af66-36da6d432250"
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
