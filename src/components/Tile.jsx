import "./tile.css";

const Tile = ({ imgUrl, countryName, alt }) => {
  return (
    <>
      <div className="countryCard">
        <img
          src={imgUrl}
          alt={alt}
          style={{ width: "100px", height: "100px" }}
        />
        <p style={{ fontSize: "1.2rem", textAlign: "center" }}>{countryName}</p>
      </div>
    </>
  );
};

export default Tile;
