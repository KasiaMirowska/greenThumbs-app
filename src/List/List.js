import React from 'react';
import GreenContext from '../Context';
import ListItem from '../LIstItem/ListItem';
import './List.css';


export default class List extends React.Component {
    static contextType = GreenContext;
    render() {
       
        let { list } = this.context;
        list = list.map(item => {

            return (
                <ListItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    itemLocation={item.location}
                    phone={item.display_phone}
                    price={item.price}
                    img_url={item.image_url}
                    website={item.url}
                    rating={item.rating}
                />
            )
        })

        return (
            <ul className='list'>
                <h2 className='list-header' >PLACES IN : {this.props.match.params.location.toUpperCase()}</h2>
                {list}
            </ul>
        )

    }
}