import React, { createContext } from 'react';
//import STORE from './dummyData';

const GreenContext = React.createContext({
    list: [],
    greenPlaces: [],
    userPlaces: [],
    folders: [],
    citySortPlaces: [],
    setList: () => { },
    setGreenPlaces: () => { },
    citySort: () => {},
    userSort: () => {},

})
export default GreenContext;

export class GreenContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            greenPlaces: [],
            userPlaces: [],
            citySortPlaces: [],
            folders: [],
        }
    }

    setList = (data) => {
        this.setState({
            list: data,
        })
    }
    setGreenPlaces = (data) => {
        this.setState({
            greenPlaces: data
        })
    }

    userSort = (filteredPlaces)=> {
        this.setState({
            userPlaces: filteredPlaces,
        })
    }

    citySort = (city) => {
        let reviews = this.state.greenPlaces.filter(pl => {
            console.log(city, this.state.greenPlaces)
            return pl.location_city.toLowerCase() === city.toLowerCase()
        })
        console.log(reviews)
        this.setState({
            citySortPlaces: reviews,
        })
    }
    render() {
       
        const contextValue = {
            list: this.state.list,
            greenPlaces: this.state.greenPlaces,
            userPlaces: this.state.userPlaces,
            citySortPlaces: this.state.citySortPlaces,
            userSort: this.userSort,
            setList: this.setList,
            setGreenPlaces: this.setGreenPlaces,
            citySort: this.citySort,
        }
        return (
            <GreenContext.Provider value={contextValue} >
                {this.props.children}
            </GreenContext.Provider >

        )
    }
}