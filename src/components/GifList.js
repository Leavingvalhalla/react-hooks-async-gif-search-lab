import React from 'react';

function GifList({ gifs }) {
  return gifs.map((gif) => <img key={gif} src={gif} alt={gif} />);
}

export default GifList;
