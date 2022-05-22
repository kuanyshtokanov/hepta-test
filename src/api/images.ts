import axios from 'axios';

import { ApiResponse, ImgElement } from 'models';
import jsonData from 'consts/thumbnails.json';

const getImages = (pageNumber: number, itemsPerPage: number): Promise<ApiResponse<ImgElement[]>> => {
  const startElement: number = pageNumber > 0 ? pageNumber*itemsPerPage+1 : 0;
  if (process.env.NODE_ENV === 'production') {
    return axios.get<ImgElement[]>("")
      .then(res => {
        const responseData = res.data.slice(startElement, startElement + itemsPerPage);
        return {
          data: responseData,
          isLoading: false,
          totalCount: res.data.length
        }
      })
      .catch(ex => {
        return {
          data: undefined,
          error: ex,
          isLoading: false,
          totalCount: 0
        }
      });
  } else {
    return new Promise(resolve => {
      const responseData = jsonData.slice(startElement, startElement + itemsPerPage);
      setTimeout(() => {
        resolve({
          data: responseData,
          isLoading: false,
          totalCount: jsonData.length
        })
      }, 3000)
    });
  }
};
  

export const imagesApi = {
  getImages,
};