import axios from 'axios';

const API_BASE_URL = '';
const API_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin':'*'
};

// 創建一個 Axios 實例
const apiClient = axios.create({
  baseURL: API_BASE_URL, 
  headers: API_HEADERS,
  auth: {
    username: 'admin',
    password: 'password'
    },
  httpsAgent:{ rejectUnauthorized: false }
});


  export interface Header {
    resultCode: string;
    resultDescription: string;
  }

  export interface RardResponse{
    header:Header;
    body:Card;
  }




export const getCard = async (): Promise<RardResponse> => {
  try {
    const response = await apiClient.post<RardResponse>('/api/sample/Card/v1/getCard');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


export const post = async<TRequest, TResponse> (url: string, param: TRequest): Promise<TResponse> => {
    try {
      const response = await apiClient.post<TResponse>(url,{param});
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

