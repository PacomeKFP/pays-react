import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [playedOnce, setPlayedOnce] = useState(true);
  const [rangeValue, setRangeValue] = useState(40);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    if (playedOnce) {
      axios.get("https://restcountries.com/v2/all").then((response) => {
        setData(response.data);
        setPlayedOnce(false);
      });
    }

    const sortedCountry = () => {
      const countryObj = Object.keys(data).map((i) => data[i]);
      const sortedArray = countryObj.sort((a, b) => {
        return b.population - a.population;
      });
      sortedArray.length = rangeValue;

      setSortedData(sortedArray);
    };
    sortedCountry();
  }, [data, rangeValue, playedOnce]);

  return (
    <div className="countries">
      <ul className="radio-container ">
        {/* On placce les filtres */}
        <li>
          {" "}
          <input
            type="range"
            min="1"
            onChange={(e) => setRangeValue(e.target.value)}
            max="250"
            value={rangeValue}
          />
        </li>

        {radios.map((radio) => {
          return (
            <li key={radio}>
              <input 
                type="radio"
                value={radio}
                id={radio}
                checked={radio === selectedRadio}
                onChange={(e) => setSelectedRadio(e.target.value)}
              />
              <label htmlFor={radio}>{radio}</label>
            </li>
          );
        })}
      </ul>
      {selectedRadio && <button onClick={()=>setSelectedRadio('')}>Annuler le filtre</button>}

      <ul className="countries-list">
        {sortedData
          .filter((country) => country.region.includes(selectedRadio))
          .map((country) => (
            <Card country={country} key={country.name} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
