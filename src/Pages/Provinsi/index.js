import React, { useEffect, useState } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import "./styles.css";

const Provinsi = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const filtering = (items) => {
    console.log("pasing", typeof items.provinsi);
    if (
      search.length === 0 ||
      search.toLowerCase() === "semua" ||
      search.toLowerCase() === "all"
    ) {
      return (
        <div className="cardProvinsi">
          <p className="title">{items.provinsi}</p>
          <div className="cardContainer">
            <div className="cardChild">
              <p className="text">
                Confirmed
                <br />
                <NumberFormat
                  value={items.kasusPosi}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </p>
            </div>
            <div className="cardChild">
              <p className="text">
                Recovered
                <br />
                <NumberFormat
                  value={items.kasusSemb}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </p>
            </div>
            <div className="cardChild">
              <p className="text">
                Deaths
                <br />
                <NumberFormat
                  value={items.kasusMeni}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </p>
            </div>
          </div>
        </div>
      );
    } else if (items.provinsi.toLowerCase() == search.toLowerCase()) {
      return (
        <div className="cardProvinsi">
          <p className="title">{items.provinsi}</p>
          <div className="cardContainer">
            <div className="cardChild">
              <p className="text">
                Confirmed
                <br />
                <NumberFormat
                  value={items.kasusPosi}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </p>
            </div>
            <div className="cardChild">
              <p className="text">
                Recovered
                <br />
                <NumberFormat
                  value={items.kasusSemb}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </p>
            </div>
            <div className="cardChild">
              <p className="text">
                Deaths
                <br />
                <NumberFormat
                  value={items.kasusMeni}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then((response) => {
        setData(response.data.data);
      });
  }, []);
  return (
    <div className="containerrr">
      <form>
        <input
          type="text"
          name="name"
          onChange={(val) => setSearch(val.target.value)}
        />
      </form>
      <div className="ContainerProvinsi">
        {data.map((items) => filtering(items))}
      </div>
    </div>
  );
};

export default Provinsi;
