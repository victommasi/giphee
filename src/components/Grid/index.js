const Grid = ({gifs}) => {
  return (
    <ul className="grid">
      {gifs.map((gif, index) => (
        <li className="card" key={index}>
          <img alt={gif.title} title={gif.title} src={gif.images.preview_gif.url}></img>
          <p className="title">{gif.title}</p>
        </li>
      ))}
    </ul>
  );
}

export default Grid;
