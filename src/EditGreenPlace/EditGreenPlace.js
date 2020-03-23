import React from 'react';
import GreenContext from '../Context';
import GreenCalls from '../Services/GreenCalls';
import './EditGreenPlace.css';
import EditHelper from './EditHelper';
import YelpRating from '../YelpRating/YelpRating';
import './EditGreenPlace.css';
import { animateScroll as scroll } from 'react-scroll'

export default class EditGreenPlace extends React.Component {
    static contextType = GreenContext;
    constructor(e) {
        super(e)
        this.state = {
            placeInfo: {},
            'No single use plastic': false,
            'Compostable take-out containers and cups': false,
            'No plastic bottled drinks': false,
            'Composting food scraps': false,
            'Recycle and compost bins inside': false,
            'Hemp based or fabric napkins and paper towels': false,
            'Papperless, fully computer based billing and record keeping': false,
            'Donating leftover food to local shelter or "free meal night"': false,
            'Locally sourced produce': false,
            'Organic produce': false,
            'Resposible frying oil disposal': false,
            'Saves energy by installing light timers and motion sensors': false,
            'Saves water by installing low flow faucets': false,
            'Saves energy and water by installing energy star equipmnet': false,
            categories: {
                "Coffee-shops": false,
                "Bakeries": false,
                "Juice-Bar": false,
                "Resturants": false,
                "Breakfast": false,
                "Lunch": false,
                "Dinner": false,
            },
            error: null,
        }
    }


    componentDidMount = () => {
        let place_id = this.props.match.params.placeId
        scroll.scrollToTop();
        GreenCalls.getGreenPlaceById(place_id)
            .then(place => {
                this.setState({
                    placeInfo: place,
                    comments: place.review,
                })

                place.checkedThumbs.forEach(thumb => {
                    if (Object.keys(this.state).includes(thumb)) {
                        this.setState(prevState => ({
                            [thumb]: !prevState[thumb]
                        }))
                    }
                })
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    error: err,
                })
            })
    }

    handleThumbChange = (e) => {
        const name = e.target.value

        this.setState(prevState => ({
            [name]: !prevState[name]
        }))
    }

    handleComments = (e) => {
        console.log(e.target.value, 'VALUE')
        this.setState({
            placeInfo: {
                ...this.state.placeInfo,
                review: e.target.value,
            }
        })
    }

    handleCategory = (e) => {
        e.preventDefault();
        this.setState({
            placeInfo: {
                ...this.state.placeInfo,
                category: e.target.value,
            }
        })
    }

    handleUpdateReview = async (e) => {
        e.preventDefault();

        const updatedThumbs = [];
        for (let [key, value] of Object.entries(this.state)) {
            if (value === true) {
                updatedThumbs.push(key)
            }
        }
        let finalThumbList = EditHelper.changeThumbIntoNUM(updatedThumbs)


        const updatedReview = {
            ...this.state.placeInfo,
            checkedThumbs: finalThumbList,
        }

        let place_id = this.props.match.params.placeId

        try {
            const data = await GreenCalls.editGreenPlace(place_id, updatedReview);
            if (data) {
                console.log(data)
            }
        } catch (err) {
            this.setState({
                error: err
            })
        }

        this.props.history.push('/');
    }

    handleBack = () => {
        this.props.history.goBack();
    }

    render() {
        console.log(this.state, 'YO YO YO')
        const { name, img_url, yelp_rating, location_str, location_city, location_zip, location_st, displayphone, category, review } = this.state.placeInfo;

        let checkingBoxes = [];
        for (let [key, value] of Object.entries(this.state)) {
            if (value === true) {
                console.log('found it', key)
                checkingBoxes.push((
                    <div key={`${key}`}>
                        <input className='input' type='checkbox' value={`${key}`} onChange={this.handleThumbChange} checked={this.state[`${key}`]} />
                        <label htmlFor='chx1'>{`${key}`}</label>
                        <br />
                    </div>
                ))
            } else if (value === false) {
                checkingBoxes.push((
                    <div key={`${key}`}>
                        <input className='input' type='checkbox' value={`${key}`} onClick={this.handleThumbChange} checked={this.state[`${key}`]} />
                        <label htmlFor='chx1'>{`${key}`}</label>
                        <br />
                    </div>
                ))
            }
        }


        return (
            <div className='item'>
                <div className='items-box'>
                    <div className='medium-img-container'>
                        <img src={img_url} alt='food presentation from the place'/>
                    </div>
                    <div className='text-area1'>
                        <h2>{name}</h2>
                        <p>{location_str}, {location_city}</p>
                        <p>{location_st} {location_zip}</p>
                        <br />
                        <p>{displayphone}</p>
                        <br />
                        <p>Saved in category: {category}</p>
                        <br />
                        <br />

                        <div className='rating-box'>
                            <p>Yelp rating: </p>
                            <YelpRating rating={yelp_rating} />
                        </div>
                    </div>

                </div>
                <br />
                <form className='edit-form' onSubmit={(e) => this.handleUpdateReview(e)}>
                    <h2>Noted for following reward worthy habits:</h2>
                    <br />
                    {checkingBoxes}
                    <br />
                    <br />
                    <h3>Additional comments</h3>
                    <textarea rows="10" cols='50' value={review} onChange={this.handleComments} >

                    </textarea>


                    <h3 id='select-header' >Save in category: </h3>
                    <select className="form__field2" onChange={this.handleCategory} required>
                        <option value=" ">Choose one </option>
                        <option value="Coffee-shop">Coffee-shop</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Juice-Bar">Juice-Bar</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                    </select>

                    <br />
                    <div className='error'>
                        {this.state.error ? this.state.error.message : null}
                    </div>
                    <div className='button-container2'>
                        <button type='submit' >Update Review</button>
                        <button onClick={this.handleBack}>Back</button>
                    </div>
                </form>

            </div>

        )
    }
}
