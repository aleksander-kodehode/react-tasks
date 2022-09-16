import axios from "axios";
import React, { useEffect, useState } from "react";

const CatFactPage = () => {
  const catHeading = "Cat Facts";
  const [data, setData] = useState();
  const [error, setError] = useState();

  const fetchData = () => {
    axios
      .get("https://catfact.ninja/facts")
      .then((response) => {
        setData(response.data.data);
      })
      .catch(setError(true));
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (data) {
    return (
      <div>
        <div>
          <h1>{catHeading}</h1>
          <h4>Random cat fact</h4>
          <p>{data[Math.floor(Math.random() * data.length)].fact}</p>
        </div>
        <div>
          <h4>All cat facts</h4>
          {data.map(function (facts, idx) {
            return <p key={idx}>{facts.fact}</p>;
          })}
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h1>{catHeading}</h1>
        <p>Load failed</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{catHeading}</h1>
        <p>contacts text</p>
      </div>
    );
  }
};

export default CatFactPage;
