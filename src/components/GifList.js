import React from 'react';

function GifList({ gifs }) {
  console.log(gifs[0]);
  return gifs.forEach((gif) => <img key={gif} src={gif} alt={gif} />);
}

export default GifList;
