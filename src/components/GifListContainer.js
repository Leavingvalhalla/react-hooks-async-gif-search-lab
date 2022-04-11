import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const apiKey = 'BYlz1B5A6vWE7WXWFz437oZeQglP934l';

  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState('');

  function onSubmit(newQuery) {
    setQuery(newQuery);
  }

  useEffect(
    () =>
      fetch(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const firstThree = data.data.slice(0, 3);
          const gifURLs = firstThree.map((gif) => gif.images.original.url);
          setGifs(gifURLs);
        }),
    [query]
  );
  return (
    <div>
      <GifSearch onSubmit={onSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
