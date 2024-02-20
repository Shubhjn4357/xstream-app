import { Loader, Paper } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import axiosFetcher from '../utils/axiosFetcher';

interface VideoPlayerProps {
  url: string | undefined;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [src, setSrc] = useState<string>("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (url) {
          setLoading(true);
          axiosFetcher.getProxy(url).then((localUrl) => {
            setSrc(localUrl as string);
            setLoading(false);
          });
        }
      }, [url]);
   

    return <>
        {loading?<Loader/>:<Paper className={`video-container`}>
            <video ref={videoRef} autoPlay width="640" controls>
                <source src={src as string} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Paper>}
    </>
};

export default VideoPlayer;
