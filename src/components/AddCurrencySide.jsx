import React, { useContext, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { CurrencyContext } from '../context/CurrencyContext';


const AddCurrencySide = () => {

    const {
        deactiveProduct,
        openInput,
        setOpenInput,
        openList,
        setOpenList,
        data,
        getData,
        query,
        setQuery,
        activeProduct // Add the activeProduct function
      } = useContext(CurrencyContext);


        useEffect(() => {
            getData()
        },[])

    
        const handleAddCurrency = (i) => {
            deactiveProduct(i); // Call the activeProduct function to add the currency
          };

return (
    <div className='add-currency-side'>
        <div className='left-add-currency-side'>
            <h4>VALYUTA KONVERTORU İLƏ BU GÜNƏ OLAN VALYUTA MƏZƏNNƏLƏRİNİ TƏQİB EDİN</h4>
            <span>
                Çevirmək istədiyiniz valyutanı başqa valyuta məzənnəsinə nisbətdə hesablamaq istəyirsinizsə sağ tərəfdə yer alan "+" işarəsi ilə əlavə edin, məbləği yazın və hesablayın.
            </span>
        </div>
        <div className='right-add-currency-side'>
            <div className={openInput ? 'currency-input' : 'hidden'}>
                <AiOutlineSearch className='search'/>
                <input 
                onFocus={() => setOpenList(!true)}
                type="text" 
                onChange={(e) => setQuery(e.target.value)}
                />
                <div onClick={() => setOpenList(!openList)} className='currency-select'></div>
                <div className={openList ? 'display' : 'multiselect-currency'}>
                    <ul className='multiselect-content' style={{ display: 'inline-block' }}>
                        {data
                            .filter(item => item.currencies && Object.keys(item.currencies)[0].toLowerCase().includes(query))
                            .map((v, i) => v.status && (
                            <li key={i}>
                                <div className='flag-side'>
                                <img src={v.flags.png} alt="" />
                                </div>
                                <div className='currency-side'>
                                <h3>{v.currencies ? Object.keys(v.currencies)[0] : 'No currencies'}</h3>
                                <span>{v.currencies ? v.currencies[Object.keys(v.currencies)[0]].name : 'No currencies'}</span>
                                </div>
                                <button onClick={() => handleAddCurrency(i)} className='currency-btn'>
                                <AiOutlinePlus />
                                </button>
                            </li>
                            ))}
                    </ul>
                </div>
            </div>
            <button onClick={() => setOpenInput(!openInput)} className='btn-currency'>
                <AiOutlinePlus/>
            </button>
        </div>
    </div>
  )
}

export default AddCurrencySide


