import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import image from './crypto-coins.png'
import Form from './components/Form';
import Quotation from './components/Quotation';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media( min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img` 
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {

  const [currency, setCurrency] = useState('');
  const [crypto, setCrypto] = useState('');
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const quoteCryptocurrency = async () => {
      // avoid executes on first load time
      if(currency === '') return;
  
      // fetch quotation API
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
      const result = await axios.get(url);

      // show spinner
      // set the state of loading
      await setLoading(false);
      // set quotation
      await setResult(result.data.DISPLAY[crypto][currency]);


    }

    quoteCryptocurrency();
  }, [currency, crypto])
  return (
    <Container>
      <div>
        <Image src={image}/>
      </div>
      <div>
        <Heading> Cryptocurrency Quotes Instantly</Heading>
        <Form
          setCurrency={setCurrency}
          setCrypto={setCrypto}
        />
        <Quotation
          result={result}
        />
      </div>
    </Container>
  );
}

export default App;
