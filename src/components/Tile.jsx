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
        <p style={{ fontSize: "1.2rem" }}>{countryName}</p>
      </div>
    </>
  );
};

export default Tile;
