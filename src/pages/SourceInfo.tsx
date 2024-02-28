import { useState, useEffect } from 'react';
import { IAnimeInfo, IMovieEpisode, IMovieInfo} from '../interfaces/type';
import { useParams } from 'react-router-dom';
import movieApi from '../utils/movieApi';
import { Paper, Text, Title } from '@mantine/core';
import useProxy from '../hooks/useProxy';
import { Slider } from '../component';
import PaginationHandler from '../component/PaginationHandler';
import animeApi from '../utils/animeApi';
export interface season{
    season: number;
    image?: string;
    episodes: IMovieEpisode[];
}
const SourceInfo = () => {
  const {id,type} = useParams();
  const [source, setSource] = useState<IAnimeInfo | IMovieInfo | null>(null);
  const {loading,response,error}=useProxy(source?.cover as string);
  useEffect(() => {
    if(type==="anime"){
      animeApi.getAnimeInfo(id).then(data=>setSource(data.data));
    }
    else{
      movieApi.getInfo(`${type}/${id}`).then(data=>setSource(data.data));
    }
  }, [id,type])
  
  return (<Paper className='movie'>
    <span className="source-poster" style={{backgroundImage:`linear-gradient(45deg,30% rgba(255, 255, 255, 0.048),70% rgb(0, 0, 0)),url(${error?"https://picsum.photos/800":loading?"https://placehold.co/1200x800?text=Loading...":response?response:"https://placehold.co/600x400"})`}}>
      <Paper p={4} className="movie-details glassmorphism">
          <Title order={2}>{source?.title as string}</Title>
          {source?.rating && <Text my={4} >Rating: {source?.rating}</Text>}
          {source?.releaseDate && <Text my={4}>Rating: {source?.releaseDate}</Text>}
          {source?.description && <Text my={4}>{source?.description}</Text>}
          {source?.genres && <Text my={4}>Genres: {source?.genres.join(', ')}</Text>}
          {source?.status && <Text my={4}>Status: {source?.status}</Text>}
          {source?.duration && <Text my={4}>Duration: {source?.duration}</Text>}
          {source?.production && <Text my={4}>Production: {source?.production}</Text>}
          {source?.casts && <Text my={4}>Casts: {source?.casts.join(', ')}</Text>}
          {source?.tags && <Text my={4}>Tags: {source?.tags.join(' ')}</Text>}
          {source?.totalEpisodes && <Text my={4}>Total Episodes: {source?.totalEpisodes}</Text>}
        </Paper>
        
          {source?.seasons && source?.seasons.map((season:season, index:number) => (
            <Paper key={index} className="season bg-transparent my-4">
              <h3>Season {season.season}</h3>
              {season.image && <img src={season.image} alt={`Season ${season.season}`} />}
              <PaginationHandler source={source}/>
            </Paper>
          ))}
          {source?.episodes?<PaginationHandler source={source}/>:null}
        
         <Title order={3}>Recomendation</Title>
        {source?.recommendations?<Slider  slide={3} space={5} content={source.recommendations}/>:""}
     
    </span>
  </Paper>);
};

export default SourceInfo;
