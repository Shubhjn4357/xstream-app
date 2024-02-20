import axios from "axios";
import { fetchInterface } from "../interfaces/movieApi";

// Assuming xstremapi is your base URL defined in the environment variables
const xstreamapi = import.meta.env.VITE_API_XSTREAM_API;
// const xtestapi="http://localhost:3000"
class AxiosFetcher {
    constructor(){}
    
  // Generic method for fetching data with Axios, managing loading and error states
  async fetchWithAxios<T>(endpoint: string): Promise<fetchInterface<T>> {
    const response: fetchInterface<T>={
      data:null , loading: false, error:  null 
   };
    response.loading = true;
    try {
      const result = await axios.get<T>(`${xstreamapi}/${endpoint}`);
      response.data = result.data; // Data from Axios response
      response.loading = false;
    } catch (error) {
      response.error = error as Error; // Casting the error to an Error type
      response.loading = false;
    }

    return response;
  }

  async getProxy(url:string){
    const encodedImageUrl = encodeURIComponent(url);
    const headers = {}; // Replace with any headers you need to pass
    const encodedHeaders = encodeURIComponent(JSON.stringify(headers));
    const baseUri="https://xstream-api.vercel.app"
    // const textUri="https://0.0.0.0:3000";
     try {
       const response=await axios.get(`${baseUri}/utils/image-proxy?url=${encodedImageUrl}&headers=${encodedHeaders}`,{responseType: 'arraybuffer'});
       if (!response) {
        throw new Error('No response from the proxy server.');
      }
       return response?.data;
     } catch (error) {
      console.error('Error fetching the proxied image:', error);
      throw error;
     }
  }
}
const axiosFetcher=new AxiosFetcher();
export default axiosFetcher;