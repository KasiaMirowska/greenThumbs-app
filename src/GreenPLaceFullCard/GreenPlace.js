import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreenContext from '../Context';

export default withRouter(class GreenPlace extends React.Component {
    static contextType = GreenContext;
    render() {
        const greenPractices = ['No single use plastic','Compostable take-out containers and cups', 'No plastic bottled drinks', 'Composting food scraps', 'Recycle and compost bins inside', 'Hemp based or fabric napkins and paper towels', 'Papperless, fully computer based billing and record keeping','Donating leftover food to local shelter or "free meal night"', 'Locally sourced produce', 'Organic produce', 'Resposible frying oil disposal', 'Saves energy by installing light timers and motion sensors', 'Saves water by installing low flow faucets', 'Saves energy and water by installing energy star equipmnet']
        console.log(this.props.match)
        let placeId = this.props.match.params.placeId.slice(1)
        let yelp_id = this.props.match.params.yelpId.slice(1)
        const selectedPlace = this.context.greenPlaces.find(pl => pl.yelpId === yelp_id)
        const { id, yelpId, name, img, url, yelprating, location_str, location_city, location_zip, location_st, phone, displayphone, userid, folderid, green_reviews_count, review, reviewDate, checkedThumbs } = selectedPlace;

        const greenThumbs = selectedPlace.checkedThumbs.map((el, key) => {
            return (
                <li key={key}>{el}</li>
            )
        })
        const remainingPractices = [];
        greenPractices.filter(el => {
            if (!selectedPlace.checkedThumbs.includes(el)) {
               remainingPractices.push(el);
            }
        })
        const practicesList = remainingPractices.map((el, key) => {
            return(
                <li key={key}>
                    {el}
                </li>
            )
        })
        return (
            <div>
                <img src={img} />
                <Link to={`/bookmark/${placeId}`}>
                    <button>Save place to my folder</button>
                </Link>
                <Link to={`/edit/${placeId}/`}><button>Edit review</button>
                </Link>
                <h2>{name}</h2>
                <h3>Address:</h3><p>{location_str}, {location_city}, {location_st}, {location_zip}</p>
                <h3>{displayphone}</h3>
                <h3>Yelp rating: {yelprating}</h3>
                <h3>GREEN thumbs UP reviews count: {green_reviews_count}</h3>
                <h2>This location has been noted for following Earth friendly practices:</h2>
                <ul>
                    {greenThumbs}
                </ul>
                <h2>Additional comments:</h2>
                <p>{review[0]}</p>
                <h2>Support our mission during your next visit, by pointing out the following improvements that could be made:</h2>
                <ul>
                {practicesList}
                </ul>


               


            </div>
        )
    }
})

