import React from 'react';
import StatesSelect from './StatesSelect';
import APIcalls from '../Services/APIcalls'
export default class SmallForm extends React.Component {
constructor(){
    super()
    this.state = {
        error: null,
        stateSelection: null,
        city: null,
    }
}
    handleFormSubmit = (e) => {
        e.preventDefault();
        const location = this.state.city;
        const term = 'restaurants';
        APIcalls.getAllRestaurants(term, location)
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            this.setState({
                error: err
            })
        })
    }
    
    handleCityInput = (e)=> {
        e.preventDefault();
        const location = e.target.value;
        this.setState({
            city: location,
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                <h2>Search restaurants in : </h2>
                <label>City</label>
                <input type='text' onChange={this.handleCityInput}/>
                <StatesSelect /> 
               <br />
                <button>Search</button>
            </form>
            </div>
        )
    }
}