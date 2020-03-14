import React from 'react';
import GreenContext from '../Context';
import './ReviewForm.css'; 
import GreenCalls from '../Services/GreenCalls';

export default class ReviewForm extends React.Component {
    static contextType = GreenContext;
    constructor(e) {
        super(e)
        this.state = {
            selection: [],
            comments: '',
            catregory: '',
            error: null
        }
    }

    handleSelection = (e) => {
        this.setState({
            selection: [...this.state.selection, Number(e.target.value)],
        })
       
    }

    handleComments = (e) => {
        this.setState({
            comments: e.target.value
        })
    }

    handleCategory = (e)=> {
        e.preventDefault();
        console.log(e.target.value, 'CATEGORY')
        this.setState({
            category: e.target.value,
        })
    }

    handlePlaceReview = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const currentPlace = this.context.list.find(item => item.id === id);
        console.log(currentPlace, 'PLACE')
        const newReviewedPlace = {
            yelp_id: this.props.match.params.id,
            name: currentPlace.name,
            img: currentPlace.image_url,
            url: currentPlace.url,
            yelp_rating: currentPlace.rating,
            location_str: currentPlace.location.address1,
            location_city: currentPlace.location.city,
            location_zip: currentPlace.location.zip_code,
            location_st: currentPlace.location.state,
            display_phone: currentPlace.display_phone,
            category: this.state.category,
            // price: currentPlace.price,
            checkedThumbs: this.state.selection,
            review: this.state.comments,
        }
        console.log(newReviewedPlace, 'SENT INFO')
        
        GreenCalls.postNewReview(this.props.match.params.id, newReviewedPlace)
        .then(data => {
            console.log(data, 'SAVED????')
            this.props.history.push(`/reviews/${newReviewedPlace.location_city}`)
        })
        .catch(err => {
            this.setState({
                error: err
            })
        })
        
    }


    render() {
        const id = this.props.match.params.id;
        const currentPlace = this.context.list.find(item => item.id === id)
        console.log(currentPlace,'CURRENT PLACE')
        return (
            <div className='res-card'>
                <h2>{currentPlace.name}</h2>
                <p>{currentPlace.location.address1}</p>
                <p>{currentPlace.location.city}</p>
                <p>{currentPlace.location.state}</p>
                <p>{currentPlace.location.zip_code}</p>
                <p>{currentPlace.phone}</p>
                <p>{currentPlace.price}</p>
                <img src={currentPlace.image_url} />
                <a href={`${currentPlace.url}`}><h2>Visit</h2></a>
                {currentPlace.rating}

                <br />
                <form onSubmit={this.handlePlaceReview}>
                    <h3>Mark reward worthy habits!:</h3>
                    
                    <br />
                    <input className='input' type='checkbox'  value='1' id='chx1' onClick={this.handleSelection} />
                    <label htmlFor='chx1'>No single use plastics</label>
                    <br />

                    <input className='input' type='checkbox' value='2' onClick={this.handleSelection} />
                    <label>Compostable take-out containers and cups</label>
                    <br />

                    <input className='input' type='checkbox' value='3' onClick={this.handleSelection} />
                    <label>No plastic bottled drinks</label>
                    <br />

                    <input className='input' type='checkbox' value='4' onClick={this.handleSelection} />
                    <label>Composting food scraps</label>
                    <br />

                    <input className='input' type='checkbox' value='5' onClick={this.handleSelection} />
                    <label>Recycle and compost bins inside</label>
                    <br />

                    <input className='input' type='checkbox' value='6' onClick={this.handleSelection} />
                    <label>Hemp based or fabric napkins and paper towels</label>
                    <br />

                    <input className='input' type='checkbox' value='7' onClick={this.handleSelection} />
                    <label>Papperless, fully computer based billing and record keeping</label>
                    <br />

                    <input className='input' type='checkbox' value='8' onClick={this.handleSelection} />
                    <label>Donating food to local shelter or 'free meal night'</label>
                    <br />

                    <input className='input' type='checkbox' value='9' onClick={this.handleSelection} />
                    <label>Locally sourced produce</label>
                    <br />

                    <input className='input' type='checkbox' value='10' onClick={this.handleSelection} />
                    <label>Organic produce</label>
                    <br />

                    <input className='input' type='checkbox' value='11' onClick={this.handleSelection} />
                    <label>Resposible frying oil disposal</label>
                    <br />


                    <input className='input' type='checkbox' value='12' onClick={this.handleSelection} />
                    <label>Saves energy by installing light timers and motion sensors</label>
                    <br />

                    <input className='input' type='checkbox' value='13' onClick={this.handleAddAttribute} />
                    <label>Saves water by installing low flow faucets</label>
                    <br />

                    <input className='input' type='checkbox' value='14' onClick={this.handleAddAttribute} />
                    <label>Saves energy and water by installing energy star equipmnet</label>
                    <br />
                    <h3>Additional comments</h3>
                    <textarea rows="10" cols='50' onChange={this.handleComments} ></textarea>
                    <br />

                    <h2>Save in category: </h2>
                    <select onChange={this.handleCategory} required>
                    <option value=" ">Choose one </option>
                    <option value="Coffee-shops">Coffee-shops</option>
                    <option value="Bakeries">Bakeries</option>
                    <option value="Juice-Bar">Juice-Bars</option>
                    <option value="Resturants">Restaurants</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                   
                </select>
                    <button>Post Review</button>
                </form>


            </div>
        )
    }
}