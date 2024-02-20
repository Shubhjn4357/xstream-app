import { useState, useEffect } from 'react';
import { Grid, Text, Button, Tooltip } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { IEpisodeServer } from '../interfaces/type';
import movieApi from '../utils/movieApi';
import { EpisodesListInterface } from './PaginationHandler';

export const EpisodesListComponent = ({ currentEpisode, source, hasEpisodes }: EpisodesListInterface) => {
  const [server, setServer] = useState<IEpisodeServer>();
  console.log("server",server)
  const GetServer = async (episode: string, media: string) => {
    let server: IEpisodeServer | null = null;
    try {
      const response = await movieApi.getServer(episode, media);
      server = response?.data;
    } catch (error) {
      console.error(error);
    }
    return server;
  };
  useEffect(() => {
    const fetchServer = async () => {
      if (currentEpisode && source?.id) {
        const serverData = await GetServer(currentEpisode.id, source.id);
        setServer(serverData);
      }
    };

    fetchServer();
  }, [currentEpisode, source?.id]);
  return (
    <>
      {currentEpisode?
        <Grid.Col span={hasEpisodes ? 3 : 12} key={currentEpisode?.id} className="episode bg-transparent my-4">
          <Tooltip label={currentEpisode?.title}>
            <Text w={hasEpisodes ? 150 : "auto"} p={10} truncate>{currentEpisode?.title}</Text>
          </Tooltip>
          {server?(
            Object.entries(server).map(([key, serve])=>{
              return <NavLink key={key} className="my-4" to={`/watch/${source?.id}/${serve?.name}/${currentEpisode?.id}`}>
              <Button variant='filled'>{serve.name}</Button>
            </NavLink> 
            })
          ):null}
        </Grid.Col>:null}
    </>
  );
};
