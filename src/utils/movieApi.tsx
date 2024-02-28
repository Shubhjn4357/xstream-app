import axiosFetcher from "./axiosFetcher";
import { IEpisodeServer, IMovieInfo, IMovieResult, ISearch, ISource } from "../interfaces/type";

class MovieAPI {
  
    constructor() {}
    //url//
    //recent-movies
    //trending?type="tv,movie",
    //recent-shows,
    //:search,
    // info/id,
    // server?episodeid={}&mediaid
    // watch/episodeid/mediaid/server,
    async getRecentMovies(){
        return await axiosFetcher.fetchWithAxios<IMovieResult[]>("movies/flixhq/recent-movies");
    }
    async getTrendingMovies(){
        return await axiosFetcher.fetchWithAxios<IMovieResult[]>("movies/flixhq/trending?type=movie");
    }
    async getTrendingShow(){
        return await axiosFetcher.fetchWithAxios<IMovieResult[]>("movies/flixhq/trending?type=tv");
    }
    async getRecentShows(){
        return await axiosFetcher.fetchWithAxios<IMovieResult[]>("movies/flixhq/recent-shows");
    }
    async getQuery(query:string){
        return await axiosFetcher.fetchWithAxios<ISearch<IMovieResult>>(`movies/flixhq/${query}`);
    }
    async getInfo(id:string){
        return await axiosFetcher.fetchWithAxios<IMovieInfo>(`movies/flixhq/info?id=${id}`);
    }
    async getServer(episodeId:string,mediaId:string){
        return await axiosFetcher.fetchWithAxios<IEpisodeServer>(`movies/flixhq/servers?episodeId=${episodeId}&mediaId=${mediaId}`);
    }
    async getWatch(episodeId:string,mediaId:string,server?:string){
        return await axiosFetcher.fetchWithAxios<ISource>(`movies/fmovies/watch?episodeId=${episodeId}&mediaId=${mediaId}&server=${server}`);
    }
    
  
  }
  
const movieApi=new MovieAPI()
 export default movieApi;  