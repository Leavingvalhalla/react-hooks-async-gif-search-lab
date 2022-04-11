import React, { useState, useEffect } from 'react';
import GifList from './GifList';

function GifListContainer() {
  const apiKey = 'BYlz1B5A6vWE7WXWFz437oZeQglP934l';

  const [gifs, setGifs] = useState([]);

  useEffect(
    () =>
      fetch(
        `https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${apiKey}&rating=g`
      )
        .then((res) => res.json())
        .then((data) => {
          const firstThree = data.data.slice(0, 3);
          const gifURLs = firstThree.map((gif) => gif.images.original.url);
          setGifs(gifURLs);
        }),
    []
  );
  return <GifList gifs={gifs} />;
}

export default GifListContainer;
