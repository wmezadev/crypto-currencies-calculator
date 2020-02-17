import React from 'react';
import styled from '@emotion/styled';

import useCurrency from '../hooks/useCurrency';

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
    
    const CURRENCIES = [
        { code: 'USD', name: 'USA Dollar' },
        { code: 'COL', name: 'Colombian Peso' },
        { code: 'BRL', name: 'Brazilian real' },
        { code: 'CLP', name: 'Chilean peso' },
        { code: 'PEN', name: 'Peruvian sol' },
        { code: 'MXN', name: 'Mexican Peso' },
        { code: 'EUR', name: 'Euro currency' },
        { code: 'GBP', name: 'UK Pound' }
    ]

    // Use state from useCurrency
    const [currency, SelectCurrency] = useCurrency('Select your currency', '', CURRENCIES);

    return (
        <form>
            <SelectCurrency />
            <Button
                type="submit"
                value="Calculate"
            />
        </form>
    );
}
 
export default Form;