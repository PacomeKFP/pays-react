import React from "react";

const Card = (props) => {
  const { country } = props;

  const numberFormat = (x)=>{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <li className="card">
        <img src={country.flag} alt="flag" />
        <div className="data-container infos">
          <div>
            <div> {country.name} </div>
            <div> {country.capital} </div>
            <div>Pop. {numberFormat(country.population)} </div>
          </div>
        </div>
    </li>
  );
};

export default Card;
