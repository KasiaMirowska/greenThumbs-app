import React from 'react';

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
    //error: null,
    setError: () => {},
    resetError: () => {},
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
            error: null,
        }
    }

    setError = (err) => {
        this.setState({
            error: err
        })
    }
    resetError = () => {
        this.setState({
            error: null,
        })
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
            return pl.location_city.toLowerCase() === city.toLowerCase();
        });
       
        this.setState({
            citySelection: true,
            citySortPlaces: reviews,
        });
    }

    categorySort = category => {
        let reviews = this.state.greenPlaces.filter(pl => {
            return pl.category === category;
        });
       
        this.setState({
            categorySortPlaces: reviews,
            categorySelection: true,
        });

    }
    render() {
        
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
            setError: this.setError,
            resetError: this.resetError,
            setList: this.setList,
            setGreenPlaces: this.setGreenPlaces,
            setCurrentUser: this.setCurrentUser,
            setUserSelection: this.setUserSelection,
            citySort: this.citySort,
            categorySort: this.categorySort,
            error: this.state.error,
        };
        return (
            <GreenContext.Provider value={contextValue} >
                {this.props.children}
            </GreenContext.Provider >

        );
    }
}