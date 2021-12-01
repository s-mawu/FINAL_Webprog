import React, { useEffect, useState } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
// import CountUp from 'react-countup'
import "./styles.css";

const Indonesia = () => {
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api/countries/indonesia")
      .then((response) => {
        console.log("dari api indo", response);
        setConfirmed(response.data.confirmed.value);
        setRecovered(response.data.recovered.value);
        setDeaths(response.data.deaths.value);
      });
  }, []);
  return (
    <div className="ContainerIndo">
      <div className="cardsIndo">
        <p className="title">Confirmed</p>
        <p className="text">
          <NumberFormat
            value={confirmed}
            displayType={"text"}
            thousandSeparator={true}
          />
        </p>
        {/* <p><CountUp end={confirmed} separator=","/></p> */}
      </div>
      <div className="cardsIndo">
        <p className="title">Recovered</p>
        <p className="text">
          <NumberFormat
            value={recovered}
            displayType={"text"}
            thousandSeparator={true}
          />
        </p>
        {/* <p><CountUp end={recovered} separator=","/></p> */}
      </div>
      <div className="cardsIndo">
        <p className="title">Deaths</p>
        <p className="text">
          <NumberFormat
            value={deaths}
            displayType={"text"}
            thousandSeparator={true}
          />
        </p>
        {/* <p style={{color:"#e5e5e5"}}><CountUp end={deaths} separator=","/></p> */}
      </div>
    </div>
  );
};

export default Indonesia;
