import React from 'react';
import ProxyCalls from '../Services/ProxyCalls'
import GreenContext from '../Context';
import './SmallForm.css';


export default class SmallForm extends React.Component {
    static contextType = GreenContext;
    constructor() {
        super()
        this.state = {
            error: null,
            //stateSelection: null,
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
                console.log(data)
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
    handleCategoryInput = e => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
            term: e.target.value
        });
    }

    render() {
        
        return (
            <div className='small-form'>

                <form className='form'onSubmit={this.handleFormSubmit}>
                    <div className='select-bar' >
                        <h2>Search for: </h2>
                        
                        <select className="form__field" onChange={this.handleCategoryInput} required>
                            <option value=" ">Select category: </option>
                            <option value="coffee">Coffee-shops</option>
                            <option value="bakery">Bakeries</option>
                            <option value="juice">Juice-Bars</option>
                            <option value="resturants">Restaurants</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                        </select>
                       
                    {/* </div>


                    <div className='search-bar'> */}
                        <h2>In</h2>
                        <input type='text' className="form__field" placeholder='City' onChange={this.handleCityInput} required />
                    </div>
                    <div className='button-container'>
                        <button>Search</button>
                    </div>
                </form>

            </div>
        );
    }
}