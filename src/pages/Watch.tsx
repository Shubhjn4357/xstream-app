import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import movieApi from "../utils/movieApi";
import { ISource } from "../interfaces/type";



const Watch = () => {
  
  const { type, id, server, epid } = useParams();
  const [StreamingData,setData]=useState<ISource | null>(null);
  console.log(StreamingData)
  useEffect(() => {
   
    movieApi.getWatch(epid as string, type + "/" + id, server as string).then((data)=>setData(data.data))
  },[ type, id, server, epid])
  return (<>
    <div>{type}</div>
    </>
    )
}

    export default Watch