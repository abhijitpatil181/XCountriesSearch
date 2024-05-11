import styles from "./tile.module.css";

const Tile = ({ imgUrl, countryName, alt }) => {
  return (
    <>
      <div className={styles.countryCard}>
        <img
          src={imgUrl}
          alt={alt}
          style={{ width: "100px", height: "100px" }}
        />
        <h4>{countryName}</h4>
      </div>
    </>
  );
};

export default Tile;
