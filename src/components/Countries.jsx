import { useEffect, useState } from "react";
import Tile from "./Tile";

const Countries = () => {
  const [allCountry, setAllCountry] = useState([]);
  const [countries, setCountries] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState("");
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((countriesData) => {
        setAllCountry(countriesData);
        setCountries(countriesData);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    //console.log("new Timer Id", timerId);
    return () => {
      // console.log("clearng time id", timerId);
      clearTimeout(timerId);
    };
  }, [timerId]);

  const debounceSearch = (searchText) => {
    if (searchText === "") {
      setCountries(allCountry);
      return;
    }
    const tempCountries = allCountry.filter((country) =>
      country.name.common.includes(searchText)
    );
    setCountries(tempCountries);
  };

  const onChangeHandler = (e) => {
    setSearchedCountry(e.target.value);
    let tempTimerId = setTimeout(() => {
      debounceSearch(e.target.value);
    }, 200);

    setTimerId(tempTimerId);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow:
            "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
          padding: "0.8rem",
          marginBottom: "0.5rem",
        }}
      >
        <input
          type="text"
          value={searchedCountry}
          placeholder="Search for countries..."
          onChange={(e) => onChangeHandler(e)}
          style={{
            height: "2rem",
            width: "45vw",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          height: "100vh",
        }}
      >
        {countries.map((country) => (
          <Tile
            key={country.cca3}
            imgUrl={country.flags.svg}
            countryName={country.name.common}
            alt={country.flags.alt}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
