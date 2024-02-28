import { Image, Loader, Skeleton} from "@mantine/core"
import { IAnimeInfo, IAnimeResult, IMovieInfo, IMovieResult } from "../interfaces/type";
import useProxy from "../hooks/useProxy";


const ImageContainer = ({props}:{props:IMovieResult|IAnimeResult|IAnimeInfo | IMovieInfo|{image:string,id:string}}) => {
    const {image,id}=props;
    const {loading,response}=useProxy(image as string);
   
  return <>
  {loading?<Loader/>:response?
  <Image radius="md" className="movie-poster" fit="cover" src={response} alt={id} fallbackSrc="https://placehold.co/600x400?text=NoImageFound" />:<Skeleton/>
  }
  </>
}

export default ImageContainer