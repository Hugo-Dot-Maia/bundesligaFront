export const parseJSON = (jsonString) => {
    try {
      const parsedData = JSON.parse(jsonString);
      return parsedData;
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return null;
    }
  }
  