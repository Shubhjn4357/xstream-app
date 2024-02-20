export interface BaseInterface{
    currentPage: number, // current page
    hasNextPage: boolean, // if there is a next page
    results:RecentRelease[]|TopAiring[]|AnimeMovies[]
}
//interfaces for Above Api
export interface Source {
    quality: string,
    link: string
  }

 export interface GetDownloadUrl {
    headers: {
        Referer: string
    },
    sources: Source[]
  }

 export interface TopAiring {
        animeId: string,
		animeTitle: string,
		animeImg: string,
		latestEp: string,
		animeUrl: string,
		genres: string[]
  }

 export interface Genre {
    animeId:string,
    animeTitle: string,
    animeImg: string,
    releasedDate: number,
    animeUrl: string
  }
  
 export interface AnimeMovies {
    animeId:string,
		animeTitle: string,
		animeImg: string,
		releasedDate: number,
		animeUrl: string
  }

 export interface RecentRelease {
        episodeId: string,
        animeTitle: string,
        episodeNum: number,
        subOrDub: string,
        animeImg:string,
        episodeUrl: string
  }

 export interface Popular {
    animeId: string,
    animeTitle: string,
    animeImg: string,
    releasedDate: number,
    animeUrl: string
  }

 export interface Search {
    animeId: string,
    animeTitle: string,
    animeUrl:string,
    animeImg: string,
    status: string
  }
 export interface EpisodeList {
        episodeId: string,
        episodeNum: number,
        episodeUrl:string
  }
 export interface AnimeDetails {
    animeTitle: string,
    type:string,
    releasedDate:number,
    status: string,
    genres: string[],
    otherNames: string,
    synopsis: string,
    animeImg: string,
    episodesAvaliable:number,
    episodesList:EpisodeList[]
}