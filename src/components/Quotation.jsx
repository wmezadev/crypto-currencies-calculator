import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ResultDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Price = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

const Quotation = ({result}) => {
    if(Object.keys(result).length === 0) return null;


    return ( 
        <ResultDiv>
            <Price>The Price is: <span>{result.PRICE}</span> </Price>
            <Info>Highest Price today: <span>{result.HIGHDAY}</span> </Info>
            <Info>Lowest Price today: <span>{result.LOWDAY}</span> </Info>
            <Info>Last 24 hours rate change: <span>{result.CHANGEPCT24HOUR}</span> </Info>
            <Info>Last update: <span>{result.LASTUPDATE}</span> </Info>
        </ResultDiv>
     );
}

Quotation.propTypes = {
    result: PropTypes.object.isRequired
}
 
export default Quotation;