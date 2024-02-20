import { useEffect, useState } from "react";
import { IMovieResult } from "@consumet/extensions";
import { Paper, Title } from "@mantine/core";
import { Slider } from "../component";
import movieApi from "../utils/movieApi";
import { IAnimeResult, ISearch } from "../interfaces/type";
import animeApi from "../utils/animeApi";

const Home = () => {
  const [recentAnimeRealease,setRecentAnimeRelease]=useState<ISearch<IAnimeResult>| null>();
  const [topAnimeAiring,setAnimeTopAiring]=useState<ISearch<IAnimeResult>| null>();
  const [recentMovies,setRecentMovies]=useState<IMovieResult[] | null>();
  const [recentTvSeries,setRecentTvSeries]=useState<IMovieResult[] | null>();
  const [trendingMovies,setTrendingMovies]=useState<IMovieResult[] | null>();
  const [trendingTvSeries,setTrendingTvSeries]=useState<IMovieResult[] | null>();
  useEffect(()=>{
   
      //AnimeApi
      animeApi.getTopAnime().then((data)=>{
        if(data?.error) throw new Error;
        setAnimeTopAiring(data?.data);
      })
      animeApi.getRecentAnimeRealease().then((data)=>{
        if(data?.error) throw new Error;
        setRecentAnimeRelease(data?.data);
      })
      //MovieApi
      movieApi.getRecentMovies().then((data)=>{
        if(data?.error) throw new Error;
        setRecentMovies(data?.data);
      })
    
      movieApi.getRecentShows().then((data)=>{
        if(data?.error) throw new Error;
        setRecentTvSeries(data?.data);
      }) 
      movieApi.getTrendingMovies().then((data)=>{
        if(data?.error) throw new Error;
        setTrendingMovies(data?.data);
      }) 
      movieApi.getTrendingShow().then((data)=>{
        if(data?.error) throw new Error;
        setTrendingTvSeries(data?.data);
      })
  },[])
  return (
    <Paper my={15}>
        <Slider slide={5} space={20} ratio={9/16} play={true} page content={recentMovies} /> 
        <Title order={2} py={16} px={32} my={16} fw="bolder" className="text-start">Latest Anime</Title>
        <Slider slide={4} space={20} ratio={9/16} type="anime" play={true} content={recentAnimeRealease?.results} />
        <Title order={2} py={16} px={32} my={16} fw="bolder" className="text-start">Trending Movies</Title>
        <Slider slide={4} space={20} ratio={9/16} play={true} content={trendingMovies} />
        <Title order={2} py={16} px={32} my={16} fw="bolder" className="text-start">Trending Anime</Title>
        <Slider slide={3} space={10} type="anime" content={topAnimeAiring?.results} />
        <Title order={2} py={16} px={32} my={16} fw="bolder" className="text-start">Latest released Tv/Shows</Title>
        <Slider slide={2} space={20} page content={recentTvSeries} />
        <Title order={2} py={16} px={32} my={16} fw="bolder" className="text-start">Trending Tv/Shows</Title>
        <Slider slide={3} space={20} play={true} content={trendingTvSeries} />
      </Paper>
  )
}

export default Home