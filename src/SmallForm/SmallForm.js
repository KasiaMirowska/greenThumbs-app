import React from 'react';
import StatesSelect from './StatesSelect';

export default class SmallForm extends React.Component {
    render(){
        return (
            <div>
                <form>
                <h2>Search restaurants in : </h2>
                <label>City</label>
                <input type='text' />
                <StatesSelect /> 
               <br />
                <button>Search</button>
            </form>
            </div>
        )
    }
}