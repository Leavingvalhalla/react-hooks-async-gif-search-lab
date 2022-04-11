import React, { useState } from 'react';

function GifSearch({ onSubmit }) {
  const [search, setSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default GifSearch;
