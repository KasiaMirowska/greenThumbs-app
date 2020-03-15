import React, { createContext } from 'react';
//import STORE from './dummyData';

const GreenContext = React.createContext({
    list: [],
    greenPlaces: [],
    userPlaces: [],
    folders: [],
    currentUser: null,
    userSelection: Boolean,
    citySelection: Boolean,
    categorySelection: Boolean,
    citySortPlaces: [],
    categorySortPlaces: [],
    setList: () => { },
    setCurrentUser: ()=> {},
    setUserSelection: () => {},
    setGreenPlaces: () => { },
    citySort: () => {},
    userSort: () => {},
    categorySort: () => {},
});

export default GreenContext;

export class GreenContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            greenPlaces: [],
            userPlaces: [],
            userSelection: false,
            citySelection: false,
            categorySelection: false,
            currentUser:null,
            citySortPlaces: [],
            categorySortPlaces: [],
        }
    }

    setList = data => {
        this.setState({
            list: data,
        });
    }
    setGreenPlaces = data => {
        this.setState({
            greenPlaces: data
        });
    }
    setCurrentUser =(id) => {
        console.log(id, 'USERID')
        this.setState({
            currentUser: id,
        })
    }
    setUserSelection = () => {
        this.setState({
            userSelection: true,
        })
       
    }
    userSort = filteredPlaces => {
        this.setState({
            userPlaces: filteredPlaces,
        });
    }

    citySort = city => {
        let reviews = this.state.greenPlaces.filter(pl => {
            console.log(city, this.state.greenPlaces);
            return pl.location_city.toLowerCase() === city.toLowerCase();
        });
       
        this.setState({
            citySelection: true,
            citySortPlaces: reviews,
        });
    }

    categorySort = category => {
        let reviews = this.state.greenPlaces.filter(pl => {
            console.log(category, pl.category);
            return pl.category === category;
        });
       
        this.setState({
            categorySortPlaces: reviews,
            categorySelection: true,
        });

    }
    render() {
       console.log(this.state.categorySortPlaces, 'CATEGORY SORT RESULTS')
        const contextValue = {
            list: this.state.list,
            greenPlaces: this.state.greenPlaces,
            userPlaces: this.state.userPlaces,
            citySortPlaces: this.state.citySortPlaces,
            categorySortPlaces: this.state.categorySortPlaces,
            userSelection: this.state.userSelection,
            citySelection: this.state.citySelection,
            categorySelection: this.state.categorySelection,
            currentUser: this.state.currentUser,
            userSort: this.userSort,
            setList: this.setList,
            setGreenPlaces: this.setGreenPlaces,
            setCurrentUser: this.setCurrentUser,
            setUserSelection: this.setUserSelection,
            citySort: this.citySort,
            categorySort: this.categorySort,
        };
        return (
            <GreenContext.Provider value={contextValue} >
                {this.props.children}
            </GreenContext.Provider >

        );
    }
}