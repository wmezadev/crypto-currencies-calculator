import React, { Fragment, useState } from 'react';

const useCurrency = () => {
    // State to our custom hook
    const [state, setState] = useState('');

    const Select = () => (
        <Fragment>
            <label>Currency</label>
            <select>
                <option value="COL">Colombian Peso</option>
            </select>
        </Fragment>
    )
    // Return state, interface and fn that modifies the state
    return [state, Select, setState];
}

export default useCurrency;
