import React from 'react';
import GreenContext from '../Context';
import GreenCalls from '../Services/GreenCalls';
import './EditGreenPlace.css';
import EditHelper from './EditHelper';


export default class EditGreenPlace extends React.Component {
    static contextType = GreenContext;
    constructor(e) {
        super(e)
        this.state = {
            placeInfo: {},
            'No single use plastic': false,
            'Compostable take-out containers and cups':false,
            'No plastic bottled drinks': false,
            'Composting food scraps': false,
            'Recycle and compost bins inside':false,
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
                "Dinner":false, 
            },
             error: null,
        }
    }


    componentDidMount = () => {
        let place_id = this.props.match.params.placeId
        console.log(place_id, this.props, 'PROPPPPPPPPPPPPP');
        GreenCalls.getGreenPlaceById(place_id)
            .then(place => {
                console.log(place)
                this.setState({
                    placeInfo: place,
                    comments: place.review,
                })
                
            //    Object.keys(this.state.categories).forEach(category => {
            //        if(category === place.category) {
            //         this.setState(prevState => ({
            //             categories:{
            //                 [category]: !prevState[category]
            //             }   
            //         }))
            //        }
            //    });
            
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
        // e.preventDefault()
        const name = e.target.value
        
        this.setState(prevState => ({
        [name]: !prevState[name]
        }))

        console.log(name, 'GOT IT??????')
    }

    handleComments = (e) => {
        this.setState({
            placeInfo: {
                ...this.state.placeInfo,
               review: e.target.value,
            }
        })
    }

    handleCategory = (e)=> {
        e.preventDefault();
        //const category = e.target.value
        
        // this.setState(prevState => ({
        // [category]: !prevState[category]
        // }))
        this.setState({
            placeInfo: {
                ...this.state.placeInfo,
               category: e.target.value,
            }
        })
    }

    handleUpdateReview = (e) => {
        e.preventDefault();
        const updatedThumbs = [];
        for (let [key, value] of Object.entries(this.state)) {
            if (value === true) {
                updatedThumbs.push(key)
            }
        }
        let finalThumbList = EditHelper.changeThumbIntoNUM(updatedThumbs)
        
        console.log(finalThumbList)
        const updatedReview = {
            ...this.state.placeInfo,
            checkedThumbs: finalThumbList,
        }

        let place_id = this.props.match.params.placeId
        GreenCalls.editGreenPlace(place_id, updatedReview)
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            this.setState({
                error: err
            })
        })
        this.props.history.push('/');
    }



    render() {
    
        const { id, yelpId, name, img_url, url, yelprating, location_str, location_city, location_zip, location_st, displayphone, category, } = this.state.placeInfo;

        console.log(this.state.placeInfo)
        let checkingBoxes = [];
        for (let [key, value] of Object.entries(this.state)) {
            if (value === true) {
                console.log('found it', key)
                checkingBoxes.push((
                    <div>
                    <input className='input' type='checkbox' value={`${key}`} onClick={this.handleThumbChange} checked={this.state[`${key}`]} />
                    <label htmlFor='chx1'>{`${key}`}</label>
                    <br />
                    </div>
                ))
            } else if (value === false){
                checkingBoxes.push((
                    <div>
                    <input className='input' type='checkbox' value={`${key}`} onClick={this.handleThumbChange} checked={this.state[`${key}`]} />
                    <label htmlFor='chx1'>{`${key}`}//////not checked</label>
                    <br />
                    </div>
                ))
            }
        }
        
       
        return (
            <div >
                
                <img src={img_url} />
                <h2>{name}</h2>
                <p>{location_str}</p>
                <p>{location_city}</p>
                <p>{location_st}</p>
                <p>{location_zip}</p>
                <p>{displayphone}</p>
                <p>{category}</p>
                <a href={`${url}`}><h2>Visit</h2></a>
                <p>Yelp rating:</p>{yelprating}

                <br />
                <form onSubmit={this.handleUpdateReview}>
                    <h3>Reward worthy habits!:</h3>
                    {checkingBoxes}
                   
                    <h3>Additional comments</h3>
                    <textarea rows="10" cols='50' onChange={this.handleComments} >
                    <div contentEditable='true' >{this.state.comments}</div>
                    </textarea>
                    

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
                    
                    <br />
                    <button type='submit' >Update Review</button>
                </form>


            </div>
        )
    }
}
