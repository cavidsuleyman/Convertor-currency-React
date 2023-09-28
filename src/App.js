import { useState } from 'react';
import './App.css';
import AddCurrencySide from './components/AddCurrencySide';
import CheckCurrency from './components/CheckCurrency';
import Header from './components/Header';
import {CurrencyContext} from './context/CurrencyContext'

function App() {

  const [openInput, setOpenInput] = useState(false);
  const [openList, setOpenList] = useState(true)
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')

  const getData = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        setData(data)
        // console.log(data);
    })
  }

  const deactiveProduct = (i) => {
    data[i].status = false;
    setData([...data])
    // console.log(data);
  } 
  const activeProduct = (i) => {
    data[i].status = true;
    setData([...data])
    // console.log(data);
  }


  return (
  <CurrencyContext.Provider value={{
    openInput, setOpenInput,openList, setOpenList,data, setData,query, setQuery,getData,deactiveProduct,activeProduct
  }}>
    <div className='main'>
        <Header/>
        <AddCurrencySide/>
        <CheckCurrency/>
    </div>
  </CurrencyContext.Provider>
  );
}

export default App;

