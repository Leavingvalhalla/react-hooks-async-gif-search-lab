import React from 'react';

function GifList({ gifs }) {
  return (
    <ul>
      {gifs.map((gif) => (
        <li>
          <img key={gif} src={gif} alt={gif} />
        </li>
      ))}
    </ul>
  );
}

export default GifList;
