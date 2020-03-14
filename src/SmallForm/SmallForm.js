import React from 'react';
import ProxyCalls from '../Services/ProxyCalls'
import GreenContext from '../Context';

export default class SmallForm extends React.Component {
    static contextType = GreenContext;
    constructor() {
        super()
        this.state = {
            error: null,
            stateSelection: null,
            city: null,
            term: null,
        }
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        const location = this.state.city;
        const term = this.state.term;

        ProxyCalls.getThroughGreenThumbApi(term, location)
            .then(data => {
                this.context.setList(data.businesses);
                this.props.history.push(`/list/${location}`);
            })
            .catch(err => {
                this.setState({
                    error: err
                });
            });
    }

    handleCityInput = e => {
        e.preventDefault();
        const location = e.target.value;
        this.setState({
            city: location,
        });
    }
    handleTypeInput = e => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
            term: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <h2>Search for: </h2>
                    <select onChange={this.handleTypeInput} required>
                        <option value=" ">Choose one </option>
                        <option value="coffee">Coffee-shops</option>
                        <option value="bakery">Bakeries</option>
                        <option value="juice">Juice-Bars</option>
                        <option value="resturants">Restaurants</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>

                    </select>
                    <h2>in :</h2>
                    <label>City</label>
                    <input type='text' onChange={this.handleCityInput} required />
                    <br />
                    <button>Search</button>
                </form>

            </div>
        );
    }
}