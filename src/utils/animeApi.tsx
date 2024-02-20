import { IAnimeInfo, IAnimeResult, ISearch } from "../interfaces/type";
import axiosFetcher from "./axiosFetcher";

class AnimeAPI {
    
    constructor() {}
    // routes
    //     '/:query',  
    //     '/info/:id',
    //     '/watch/:episodeId',
    //     '/servers/:episodeId',
    //     '/genre/:genre',
    //     '/genre/list',
    //     '/top-airing',
    //     '/movies',
    //     '/popular',
    //     '/recent-episodes',
    async getTopAnime(){
      return await axiosFetcher.fetchWithAxios<ISearch<IAnimeResult>>("anime/gogoanime/top-airing");
    }
    async getAnimeInfo(id:string){
      return await axiosFetcher.fetchWithAxios<IAnimeInfo>(`anime/gogoanime/info/${id}`);
    }
    
  
    async getAnimeMovie(){
      return await axiosFetcher.fetchWithAxios<ISearch<IAnimeResult>>("anime/gogoanime/movies");
    }
    async getRecentAnimeRealease(){
      return await axiosFetcher.fetchWithAxios<ISearch<IAnimeResult>>("anime/gogoanime/recent-episodes");
    }
    // async getGenreList(){
    //   return Genres;
    // }
    
    async getAnimeSearch(query:string){
      return await axiosFetcher.fetchWithAxios<ISearch<IAnimeResult>>(`anime/gogoanime/${query}`);
    }

  
  }
  
const animeApi=new AnimeAPI()
 export default animeApi;  