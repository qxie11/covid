import React, { useState, useEffect } from 'react';
import { Chart, Cards, CountryPicker } from "./components";
import styles from "./App.module.scss";
import { fetchData } from "./api";

const App = () => {

  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {
    const fetching = async () => {
      const data = await fetchData();
      setData(data);
    }
    fetching();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
  }

  return (
    <div className={styles.container} >
      <img src={require('./images/virus.png')} alt="COVID" className={styles.image} />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
