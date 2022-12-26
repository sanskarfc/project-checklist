import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import {
    StyledForm,
    BinaryTextInput,
    Label,
    Button,
    DecimalTextInput,
    Field
} from './styles'

function App(){
    const [binaryText, setBinaryText] = useState('');
    const [decimalText, setDecimalText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // perform the conversion on form submit
    const onFormSubmit = e => {
        e.preventDefault();

        if(binaryText.match(/^[0-1]+$/g) === null){ // if the input in binary consists of anything other than 1 or 0
            setErrorMessage('Enter either 0 or 1');
            return;
        }

        setErrorMessage(''); // set error message to blank again 

        const reverseBinaryText = binaryText.split('').map(Number).reverse() // we reverse the binary string 

        const result = reversedBinaryText.reduce(
            (accumulator, currentValue, idx) => 
                accumulator + currentValue * Math.pow(2, idx);
        )
        setDecimalText(result);
    }

    return (
        <>
            <h1>Binary to Decimal Converter</h1>
            <StyledForm onSubmit={onFormSubmit}>
                {errorMessage && <span style={{color: 'red'}}>{errorMessage}</span>}
                <br />
                <Field>
                    <Label>Binary Input</Label>
                    <div>
                        <BinaryTextInput
                            autoComplete='off'
                            type='text'
                            name='binary'
                            placeholder="Enter 0 or 1"
                            value={binaryText}
                            onChange={e => setBinaryText(e.target.value)}
                        />
                        <Button type="submit">Convert</Button>
                    </div>
                </Field>
                <Field>
                    <Label>Decimal Output</Label>
                    <DecimalTextInput
                        type="text"
                        name="decimal"
                        value={decimalText}
                        disabled
                    />
                </Field>
            </StyledForm>
        </>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)
