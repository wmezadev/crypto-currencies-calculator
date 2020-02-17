import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCrypto from '../hooks/useCrypto';
import axios from 'axios';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Form = () => {

    // state for crypto list
    const [cryptoList, setCryptoList] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

            const result = await axios.get(url);

            setCryptoList(result.data.Data);
        }

        fetchAPI();
    }, []);
    
    const CURRENCIES = [
        { code: 'USD', name: 'USA Dollar' },
        { code: 'COL', name: 'Colombian Peso' },
        { code: 'BRL', name: 'Brazilian real' },
        { code: 'CLP', name: 'Chilean peso' },
        { code: 'PEN', name: 'Peruvian sol' },
        { code: 'MXN', name: 'Mexican Peso' },
        { code: 'EUR', name: 'Euro currency' },
        { code: 'GBP', name: 'UK Pound' }
    ];

    // Use state from useCurrency
    const [currency, SelectCurrency] = useCurrency('Select your currency', '', CURRENCIES);
    const [crypto, SelectCrypto] = useCrypto('Select your crypto', '', cryptoList);

    return (
        <form>
            <SelectCurrency />
            <SelectCrypto/>
            <Button
                type="submit"
                value="Calculate"
            />
        </form>
    );
}
 
export default Form;