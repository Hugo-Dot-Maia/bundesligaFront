import axios from 'axios';
import { baseUrl } from '../../../constants/consts';

export const getSeasonResult = async (year) => {
  try {
    const response = await axios.get(`${baseUrl}CalculateSeasonResult/season/${year}`);

    return response.data;
  } catch (error) {
    throw new Error(`Error occurred during API call: ${error.message}`);
  }
};