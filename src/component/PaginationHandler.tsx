import { useState} from 'react';
import { Grid, Pagination} from '@mantine/core'; // Ensure you import necessary components
import { IAnimeEpisode, IAnimeInfo, IMovieEpisode, IMovieInfo } from '../interfaces/type';
import { EpisodesListComponent } from './EpisodesListComponent';
export interface PaginationInterface{
  source:IMovieInfo|IAnimeInfo|null,
}
export interface EpisodesListInterface extends PaginationInterface{
  currentEpisode:IMovieEpisode| IAnimeEpisode | undefined,
  hasEpisodes:boolean
}
const PaginationHandler = ({ source }:PaginationInterface) => {
  const itemsPerPage = 6; // Number of episodes to display per page
  const [currentPage, setCurrentPage] = useState(1);
 
   //find has Episode
   const hasEpisodes=source?.episodes?source?.episodes?.length>1?true:false:false;
  
  // Calculate total pages
  const totalPages = Math.ceil(source?.episodes?.length as number / itemsPerPage);
  // Calculate the episodes to display on the current page
  const currentEpisodes = source?.episodes?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <Grid>
        {currentEpisodes?.map((episode)=>{
          return <EpisodesListComponent key={episode.id} currentEpisode={episode} source={source} hasEpisodes={hasEpisodes} />
        })}
      </Grid>
      {hasEpisodes?<div className='paginated'>
        <Pagination total={totalPages} value={currentPage} onChange={setCurrentPage}/>
      </div>:null}
    </div>
  );
};
export default PaginationHandler; 