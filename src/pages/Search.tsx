import {Grid, Paper, Tabs, TextInput } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import { IAnimeResult, IMovieResult, ISearch } from "../interfaces/type";
import movieApi from "../utils/movieApi";
import animeApi from "../utils/animeApi";
import Card from "../component/Card";
import { useSearchParams } from "react-router-dom";
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [animeRes,setAnimeRes]=useState<ISearch<IAnimeResult>|null>(null);
  const [movieRes,setMovieRes]=useState<ISearch<IMovieResult>|null>(null);
  const [type,setType]=useState<string | null>("Movie");
  useEffect(()=>{
    movieApi.getQuery(searchParams.get("query") as string).then((data)=>{
      return setMovieRes(data.data);
    })
    animeApi.getAnimeSearch(searchParams.get("query") as string).then((data)=>{
      return setAnimeRes(data.data);
    })
  },[searchParams])
  
  return (
    <Paper px={2} py={4} mt={40} className="infra">
    
      <TextInput mt={5}
        autoFocus
        leftSectionPointerEvents="none"
        leftSection={<IconSearch/>}
        variant="default"
        size="md"
        radius="xl"
        value={searchParams.get("query") as string}
        onChange={(e)=>setSearchParams({query:e.target.value})}
        placeholder="Search Streaming..."
      />
    <Tabs pt={10} variant="outline" value={type} onChange={setType} >
        <Tabs.List grow>
          <Tabs.Tab value="Movie">Movie tab</Tabs.Tab>
          <Tabs.Tab value="Anime">Anime tab</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Movie" mt={10}>
        <Grid gutter={20}>
            {movieRes?.results.map((item,k)=>{
              return  <Card  key={k} item={item} ratio={9/16}/>
            })}
        </Grid>
        </Tabs.Panel>
        <Tabs.Panel value="Anime" mt={10}>
        <Grid gutter="md">
          {animeRes?.results.map((item,k)=>{
            return <Card key={k} type="anime" item={item} ratio={9/16}/>
            })}
        </Grid>
        </Tabs.Panel>
    </Tabs>
    </Paper>
  )
}

export default Search