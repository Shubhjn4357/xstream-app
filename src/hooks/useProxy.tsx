import { useState, useEffect } from "react";
import axiosFetcher from "../utils/axiosFetcher";

const useProxy=(uri:string)=>{
    const [loading,setLoading]=useState<boolean>(false);
    const [response,setResponse]=useState<string>();
    const [error,setError]=useState<unknown>();
   
    useEffect(() => {
        const getImage=async()=>{
            if (uri) {
                setLoading(true)
                try {
                    const arrayBuffer= await axiosFetcher.getProxy(uri)
                    const blob = new Blob([arrayBuffer], { type: 'mimeType' });
                    const objecturl=URL.createObjectURL(blob)
                    setResponse(objecturl);
                }
                catch (error) {
                    console.log("image",error)
                    setError(error)
                }
                setLoading(false)
            }   
        }
        getImage()
      }, [uri])
      return {loading,response,error}
}
export default useProxy;