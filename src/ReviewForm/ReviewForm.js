import React from 'react';
import GreenContext from '../Context';
import './ReviewForm.css';
import GreenCalls from '../Services/GreenCalls';
import YelpRating from '../YelpRating/YelpRating';

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

    handleCategory = (e) => {
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
        console.log(currentPlace.image_url, currentPlace.img_url)
        const newReviewedPlace = {
            yelp_id: this.props.match.params.id,
            name: currentPlace.name,
            img_url: currentPlace.image_url,
            url: currentPlace.url,
            yelp_rating: currentPlace.rating,
            location_str: currentPlace.location.address1,
            location_city: currentPlace.location.city,
            location_zip: currentPlace.location.zip_code,
            location_st: currentPlace.location.state,
            display_phone: currentPlace.display_phone,
            category: this.state.category,
            checkedThumbs: this.state.selection,
            review: this.state.comments,
        }
       
        GreenCalls.postNewReview(this.props.match.params.id, newReviewedPlace)
            .then(data => {
                console.log(data, 'SAVED????', data.id)
                this.props.history.push(`/reviews/${newReviewedPlace.location_city}`)
            })
            .catch(err => {
                this.setState({
                    error: err
                })
            })

        // GreenCalls.checkReviewCount(currentPlace.id)
        // .then(count => {
        //     console.log(count)
        //     reviewCount = Number(count)
        // })
        // .catch(err => {
        //     this.setState({
        //         error: err
        //     })
        // })
        // console.log(reviewCount, 'REVIEWCOUNT!!!!!')

    }
    handleBack = () => {
        this.props.history.goBack();
    }

    render() {
        const id = this.props.match.params.id;
        const currentPlace = this.context.list.find(item => item.id === id)

        return (
            <div className='item'>
                <div className='img-container'>
                    <img src={currentPlace.image_url} />
                </div>

                <div className='item-text'>
                    
                    <div className='text-area'>
                        <h2>{currentPlace.name}</h2>
                        <p>{currentPlace.location.address1}, {currentPlace.location.city}</p>
                        <p>{currentPlace.location.state} {currentPlace.location.zip_code}</p>
                        <br />
                        <p>{currentPlace.display_phone}</p>
                        <p>Price-range: {currentPlace.price}</p>

                        <a href={`${currentPlace.url}`}><h3>Visit</h3></a>

                        <div className='rating-box'>
                            <p>Yelp rating: </p>
                            <YelpRating rating={currentPlace.rating} />
                        </div>
                        <br />
                        <br />
                        <form onSubmit={this.handlePlaceReview}>
                            <h2>Mark reward worthy habits :</h2>

                            <br />
                            <input className='input' type='checkbox' value='1' id='chx1' onClick={this.handleSelection} />
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
                            <br />
                            <br />
                            <h3>Additional comments</h3>
                            <textarea rows="10" cols='50' onChange={this.handleComments} ></textarea>
                            <br />

                          <div className='select-box'>
                            <h3 id='select-header' >Save in category: </h3>
                            <select className="form__field2" onChange={this.handleCategory} required>
                                <option value=" ">Select category </option>
                                <option value="Coffee-shop">Coffee-shops</option>
                                <option value="Bakery">Bakeries</option>
                                <option value="Juice-Bar">Juice-Bars</option>
                                <option value="Restaurant">Restaurants</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>

                            </select>
                            </div>
                           <br />

                           <br />
                            <div className='button-container2'>
                            <button>Post Review</button>
                            <button onClick={this.handleBack}>Back</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}