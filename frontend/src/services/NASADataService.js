import axios from "axios";

const API_KEY = "FvbQjwvHLWErzGAaDpexIbFy4mMcmygHiFyuSlAk";
const NASADataService = {
  getRoverPhotos: async (page = 1) => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=${API_KEY}`
      );
      return response.data.photos;
    } catch (error) {
      console.error("Error fetching rover photos:", error);
      return [];
    }
  },
  getRoverPanoromicPhotos: async (page = 1) => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=chemcam&page=${page}&api_key=${API_KEY}`
      );
      return response.data.photos;
    } catch (error) {
      console.error("Error fetching rover photos:", error);
      return [];
    }
  },
  getAstronomyPhotos: async (page = 1) => {
    try {
      const response = await axios.get(
       ` https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
      );
      console.log("Picture of the day response:", response);
      return response.data;
    } catch (error) {
      console.error("Error fetching picture of the day:", error);
      return {};
    }

  },
};

export default NASADataService;
