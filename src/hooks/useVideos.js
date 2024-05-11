import { useState, useEffect } from "react";
import Youtube from "../api/Youtube";

const useVideos = (defaultTerm) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = async (term) => {
    const res = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(res.data.items);
    // shen search new videos-> update selectVideo too
    setSelectedVideo(res.data.items[0]);
  };

  return [videos, search];
};

export default useVideos;
