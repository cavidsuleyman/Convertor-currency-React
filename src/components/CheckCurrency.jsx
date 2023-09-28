import React, { useContext, useEffect, useState } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

const CheckCurrency = () => {
  const { data, activeProduct } = useContext(CurrencyContext);
  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://api.currencyapi.com/v3/latest?apikey=fca_live_HUl2uDA19k5cg0AZvPBFkhZx868YSexxfJ4P3avY';

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched data
        setCurrencyData(data);
      })
      .catch((error) => {
        console.error('Error fetching data from the API:', error);
      });
  }, []); // Empty dependency array to run this effect only once when the component mounts

  return (
    <div className='check-currency-main'>
      {currencyData && currencyData.currencies && (
        Object.keys(currencyData.currencies).map((currencyCode, i) => currencyData[currencyCode].status && (
          <div key={i} className='currency-main'>
            <div className='currecy-card'>
              <div className='currency-title'>
                <div className='currency-img'>
                  <img src={currencyData.flags.png} alt="" />
                </div>
                <div className='currency-name'>
                  <h3>{currencyCode}</h3>
                  <span className='cur'>{currencyData.currencies[currencyCode].name}</span>
                </div>
              </div>
              <button className='close-currency-btn' onClick={() => activeProduct(i)}>x</button>
            </div>
            <div className='currency-input-check'>
              <input inputMode='numeric' placeholder='0' type="number" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CheckCurrency;

