import React from 'react';
import GreeNContext from '../Context';
import cuid from 'cuid';
import './ReviewForm.css'; 

export default class ReviewForm extends React.Component {
    static contextType = GreeNContext;
    constructor(e) {
        super(e)
        this.state = {
            selection: [],
            comments: '',
            error: null
        }
    }

    handleSelection = (e) => {
        this.setState({
            selection: [...this.state.selection, e.target.value],
        })
       
    }

    handleComments = (e) => {
        this.setState({
            comments: e.target.value
        })
    }


    handlePlaceReview = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const currentPlace = this.context.list.find(item => item.id === id);
        console.log(currentPlace, 'PLACE')
        const newReview = {
            id: cuid(),
            placeId: this.props.match.params.id,
            placeName: currentPlace.name,
            placeCity: currentPlace.location.city,
            attributes: this.state.selection,
            addtionalComments: this.state.comments,
        }
        this.context.addReview(newReview)
        this.props.history.push(`/reviews/${newReview.placeCity}`)
    }


    render() {
        const id = this.props.match.params.id;
        const currentPlace = this.context.list.find(item => item.id === id)

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
                    <input className='input' type='checkbox'  value='no-plastic' id='chx1' onClick={this.handleSelection} />
                    <label htmlFor='chx1'>No single use plastics</label>
                    <br />

                    <input className='input' type='checkbox' value='comp-take' onClick={this.handleSelection} />
                    <label>Compostable take-out containers and cups</label>
                    <br />

                    <input className='input' type='checkbox' value='drinks' onClick={this.handleSelection} />
                    <label>No plastic bottled drinks</label>
                    <br />

                    <input className='input' type='checkbox' value='comp-food' onClick={this.handleSelection} />
                    <label>Composting food scraps</label>
                    <br />

                    <input className='input' type='checkbox' value='rec-comp' onClick={this.handleSelection} />
                    <label>Recycle and compost bins inside</label>
                    <br />

                    <input className='input' type='checkbox' value='hemp' onClick={this.handleSelection} />
                    <label>Hemp based or fabric napkins and paper towels</label>
                    <br />

                    <input className='input' type='checkbox' value='paperless' onClick={this.handleSelection} />
                    <label>Papperless, fully computer based billing and record keeping</label>
                    <br />

                    <input className='input' type='checkbox' value='donation' onClick={this.handleSelection} />
                    <label>Donating food to local shelter or 'free meal night'</label>
                    <br />

                    <input className='input' type='checkbox' value='local' onClick={this.handleSelection} />
                    <label>Locally sourced produce</label>
                    <br />

                    <input className='input' type='checkbox' value='organic' onClick={this.handleSelection} />
                    <label>Organic produce</label>
                    <br />

                    <input className='input' type='checkbox' value='oil' onClick={this.handleSelection} />
                    <label>Resposible frying oil disposal</label>
                    <br />


                    <input className='input' type='checkbox' value='energy' onClick={this.handleSelection} />
                    <label>Saves energy by installing light timers and motion sensors</label>
                    <br />

                    <input className='input' type='checkbox' value='water' onClick={this.handleAddAttribute} />
                    <label>Saves water by installing low flow faucets</label>
                    <br />

                    <input className='input' type='checkbox' value='equip' onClick={this.handleAddAttribute} />
                    <label>Saves energy and water by installing energy star equipmnet</label>
                    <br />
                    <h3>Additional comments</h3>
                    <textarea rows="10" cols='50' onChange={this.handleComments} ></textarea>
                    <br />
                    <button>Post Review</button>
                </form>


            </div>
        )
    }
}